import app from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';
// import 'firebase/auth';
import { useContext, useState, useEffect } from 'react';
import { message } from '@d4sd/components';
import userContext from '../UserContext';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

class Firebase {
  auth: any;

  db: any;

  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  useSession = () => {
    const { loggedIn, user } = useContext(userContext);
    return { loggedIn, user };
  };

  useAuth = () => {
    const [state, setState] = useState(() => {
      const user = app.auth().currentUser;
      return { loggedIn: user == null, user };
    });

    const onChange = (user: any) => {
      console.log('auth state changed');
      console.log(user.displayName);
      setState({ loggedIn: !!user, user });
    };

    useEffect(() => {
      // listen for auth state changes
      const unsubscribe = app.auth().onAuthStateChanged(onChange);
      // unsubscribe to the listener when unmounting
      return () => unsubscribe();
    }, []);

    return state;
  };

  register = (
    firstName: string, lastName: string, email: string, password: string
  ): Promise<boolean> => new Promise((resolve, reject) => {
    this.auth.createUserWithEmailAndPassword(email, password)
      .then((data: any) => {
        const actionCodeSettings = {
          url: 'https://d4sd.org/',
          handleCodeInApp: true
        };
        console.log(data.user);
        data.user.sendEmailVerification(actionCodeSettings)
          .then(() => {
            // eslint-disable-next-line
            console.log('Email Sent!');
            resolve(true);
          })
          .catch((error: any) => {
            // eslint-disable-next-line
            console.log(error);
            // eslint-disable-next-line
            console.log('Email not sent!');
            resolve(false);
          });
      }).catch((error: any) => {
        if (error.code === 'auth/weak-password') {
          message.error('The password is too weak.');
          // eslint-disable-next-line
          console.log('The password is too weak.');
        } else {
          // eslint-disable-next-line
          console.log(error.message);
        }
        // eslint-disable-next-line
        console.log(error);
        reject(error);
      });
  });

  // const provider = new firebase.auth.GoogleAuthProvider();
  //
  // export const loginWithGoogle = async () => {
  //   try {
  //     const result = await firebase.auth().signInWithPopup(provider);
  //   } catch (err) {
  //     console.error(err);
  //     throw err;
  //   }
  // };
  //
  // const github = new firebase.auth.GithubAuthProvider();
  //
  // export const loginWithGithub = async () => {
  //   try {
  //     const result = await firebase.auth().signInWithPopup(github);
  //   } catch (err) {
  //     console.error(err);
  //     throw err;
  //   }
  // };

  loginWithEmail = async (email: string, password: string): Promise<boolean> => new Promise((resolve, reject) => {
    this.auth.signInWithEmailAndPassword(email, password)
      .then((data: any) => {
        console.log('Successfully logged in!');
        resolve(true);
      }).catch((error: any) => {
        console.error(error);
        resolve(false);
      });
  });

  // export const createUserWithEmail = async (email: string, password: string) => {
  //   try {
  //     await firebase.auth().createUserWithEmailAndPassword(email, password);
  //   } catch (err) {
  //     console.error(err);
  //     throw err;
  //   }
  // };

  signOut = () => this.auth.signOut();
}
export default new Firebase();
