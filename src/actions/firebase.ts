import app from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';
import { message } from '@d4sd/components';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

class Firebase {
  auth: any;

  db: any;

  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  login = (email: any, password: any) => new Promise((resolve, reject) => {
    this
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(() => { resolve(true); })
      .catch((error: any) => { reject(error); });
  })

  logout() { return this.auth.signOut(); }


  // eslint-disable-next-line max-len
  register = (firstName: any, lastName: any, email: any, password: any) => new Promise((resolve, reject) => {
    this
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then((data: any) => {
        const actionCodeSettings = {
          url: 'https://d4sd-portal.netlify.com/',
          handleCodeInApp: true,
        };

        // Verify Email
        data.user.sendEmailVerification(actionCodeSettings)
          .then(() => {
            console.log('Email Sent!');
          })
          .catch(() => {
            console.log('Email not sent!');
          });

        // Add user to "users" firestore collection.
        app.firestore().collection('users')
          .doc(data.user.uid)
          .set({
            firstName,
            lastName,
            email,
            emailVerified: false,
            role: null,
            ethics: false,
          })
          .then(() => {
            console.log('User document added!');
            resolve(true);
          })
          .catch((error: any) => {
            console.log('Error writing document: ', error);
            error.message('OOps');
            reject(error);
          });
        resolve(true);
      })
      .catch((error: any) => {
        if (error.code === 'auth/weak-password') {
          message.error('The password is too weak.');
          console.log('The password is too weak.');
        } else {
          console.log(error.message);
        }
        console.log(error);
        reject(error);
      });
  })

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }

  async getCurrentUserQuote() {
    const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get();
    return quote.get('quote');
  }
}

export default new Firebase();
