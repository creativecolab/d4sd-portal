// 1:19:33
// Use webhoooks
/**
 * API-based backend that hits endpoints on firebase
 */

// Notes: Middleware is a function that intercepts api calls

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const app = require('express')();

admin.initializeApp();

/**
 * Probably should move this somewhere else for security reasons...
 */
const config = {
  apiKey: "AIzaSyBuHqS-Eq-cnbvU5zkXFkFqhx_HRb6DgLs",
  authDomain: "d4sd-2020.firebaseapp.com",
  databaseURL: "https://d4sd-2020.firebaseio.com",
  projectId: "d4sd-2020",
  storageBucket: "d4sd-2020.appspot.com",
  messagingSenderId: "777361277442",
  appId: "1:777361277442:web:4837951e9753358e2c1d1b",
  measurementId: "G-VZC0HCD1GE"
};

const firebase = require('firebase');
firebase.initializeApp(config);

const db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

/**
 * Get all users
 */   
// app.get('/users', (req, res) => {
//   db
//   .collection('users')
//   .orderBy('createdAt', 'desc')
//   .get()
//   .then(data => {
//     let users = [];
//     data.forEach(doc => {
//       users.push({
//         userID: doc.id,
//         firstName: doc.data().firstName,
//         lastName: doc.data().lastName,
//         email: doc.data().email,
//         createdAt: doc.data().createdAt
//       });
//     });
//     return res.json(users);
//   })
//   .catch(err => console.error(err));
// });

// Note: ESLint requires 'each then() should return a value or throw'
// Had to use sudo firebase serve

/**
 * Firebase Authentication Middleware- Adds authentication protection on certain api calls
 */ 
const FBAuth = (req, res, next) => {
  // Check if header has the Bearer { token }
  let idToken;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
    // Splits the idToken into an array with two elements: 'Bearer ' and 'idToken'
    idToken = req.headers.authorization.split('Bearer ')[1];
  } else {
    console.error('No token found');
    return res.status(403).json({ error: 'Unauthorized'});
  }

  // Decodes token and returns 1 user
  admin.auth().verifyIdToken(idToken)
    .then(decodedToken => {
      req.user = decodedToken;
      console.log('decodedToken: ', decodedToken);
      return db.collection('users')
        .where('userID', '==', req.user.uid)
        .limit(1)
        .get();
    })
    .then(data => {
      console.log('data: ', data.docs[0].data().handle);
      req.user.handle = data.docs[0].data().handle;
      return next();
    })
    .catch(err => {
      console.error('Error while verifying token: ', err);
      return res.status(403).json(err);
    });
};

/**
 * Post one wave (wave is the first comment of a thread; winds are subcomments on the wave)
 */
app.post('/wave', FBAuth, (req, res) => {
  if (req.body.body.trim() === ''){
    return res.status(400).json({ body: 'Body must not be empty'});
  }
  
  // Note: Video uses 'userHandle: req.body.userHandle'
  const newWave = {
    body: req.body.body,
    userHandle: req.user.handle,
    createdAt: new Date().toISOString()
  };

  console.log(newWave);
  db
    .collection('waves')
    .add(newWave)
    .then(doc => {
      res.json({ message: `document ${doc.id} created successfully`});
    })
    .catch(err => {
      res.status(500).json({ error: 'something went wrong'});
      console.error(err);
    });
});

/**
 * Validation Helper Functions 
 */ 
const isEmail = (email) => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(email.match(regEx)) return true;
  else return false;
}
const isEmpty = (string) => {
  if(string.trim() === '') return true;
  else return false;
}

/**
 * Signup Route
 */
app.post('/signup', (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handle: req.body.handle
  };

  // Note: If you have issues 'error: Firebase auth is not a function'
  // 'rm -rf node_modules' and then reinstall firebase and firebase-admin
  // like 'npm install firebase --save' and 'npm install firebase-admin --save'
  // (order matters). Current issue exists w/ the two packages conflicting.
  // Note: Video uses newUser.handle instead of newUser.email

  // Captures any errors
  let errors = {};

  // Email Validation
  if(isEmpty(newUser.email)){
    errors.email = 'Must not be empty';
  } else if(!isEmail(newUser.email)){
    errors.email = 'Must be a valid email address';
  }
  // Password Validation
  if(isEmpty(newUser.password)) errors.password = 'Must not be empty';
  if(newUser.password !== newUser.confirmPassword) errors.confirmPassword = 'Password must match';
  
  if(Object.keys(errors).length > 0) return res.status(400).json(errors);

  // Validate Data
  let token, userID;

  // Fetch user by handle, create a user if associated email is unique
  db.doc(`/users/${newUser.handle}`).get()
    .then(doc => {
      if(doc.exists){
        return res.status(400).json({ email: 'this email is already registered' })
      }
      else {
        return firebase
          .auth()
          .createUserWithEmailAndPassword(newUser.email, newUser.password);
      }
    })
    .then(data => {
      userID = data.user.uid;
      return data.user.getIdToken();
    })
    .then(idToken => {
      token = idToken;
      const userCredentials = {
        handle: newUser.handle,
        email: newUser.email,
        password: newUser.password,
        createdAt: new Date().toISOString(),
        userID
      };
      return db.doc(`/users/${newUser.handle}`).set(userCredentials);
    })
    .then(() => {
      return res.status(201).json({ token });
    })
    .catch(err => {
      console.error(err);
      if(err.code === `auth/email-already-in`){
        return res.status(400).json({ email: 'Email is already in use' });
      } else {
        return res.status(500).json({ error: err.code });
      }
    });
});

/**
 * Login Route
 * Note: Why is this a post request? Shouldn't it be get?
 */
app.post('/login', (req, res) => {
  const user = {
    email: req.body.email, 
    password: req.body.password
  };

  let errors = {};

  if(isEmpty(user.email)) errors.email = 'Must not be empty';
  if(isEmpty(user.password)) errors.password = 'Must not be empty';

  if(Object.keys(errors).length > 0) return res.status(400).json(errors);

  //  Sign in with the email and password; returns the user token on success
  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then(data => {
      return data.user.getIdToken();
    })
    .then(token => {
      console.log(token);
      return res.json({token}); 
    })
    .catch(err => {
      console.error(err);
      if(err.code === 'auth/wrong-password'){
        return res.status(403).json({ general: 'Wrong credentials, please try again' });
      }else return res.status(500).json({errors: err.code });
    });
});


// Prefix of /api makes sure there aren't any conflicts w/ frontend
// https://baseurl.com/api/
exports.api = functions.https.onRequest(app);