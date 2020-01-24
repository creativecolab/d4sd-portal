import app from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';
// import 'firebase/auth';
import { useContext, useState, useEffect } from 'react';
import { message } from '@d4sd/components';
import userContext, { UserContext } from '../UserContext';


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
  auth: firebase.auth.Auth;

  db: firebase.firestore.Firestore;

  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  useSession = (): UserContext => {
    const { loggedIn, user } = useContext(userContext);
    return { loggedIn, user };
  };

  useAuth = (): UserContext => {
    const [state, setState] = useState(() => {
      const user = this.auth.currentUser;
      return { loggedIn: !!user, user };
    });

    const onChange = (user: app.User | null): void => {
      // eslint-disable-next-line
      console.log('auth state changed');
      // eslint-disable-next-line
      console.log(user ? user.displayName : null);
      setState({ loggedIn: !!user, user });
    };

    useEffect(() => {
      // listen for auth state changes
      const unsubscribe = app.auth().onAuthStateChanged(onChange);
      // unsubscribe to the listener when unmounting
      return (): void => unsubscribe();
    }, []);

    return state;
  };

  register = (
    firstName: string, lastName: string, email: string, password: string
  ): Promise<boolean> => new Promise((resolve, reject) => {
    this.auth.createUserWithEmailAndPassword(email, password)
      // eslint-disable-next-line
      .then((data: any) => {
        const actionCodeSettings = {
          url: 'https://d4sd.org/',
          handleCodeInApp: true
        };
        // eslint-disable-next-line
        console.log(data.user);
        data.user.sendEmailVerification(actionCodeSettings)
          .then(() => {
            // eslint-disable-next-line
            console.log('Email Sent!');
            resolve(true);
          })
          // eslint-disable-next-line
          .catch((error: any) => {
            // eslint-disable-next-line
            console.log(error);
            // eslint-disable-next-line
            console.log('Email not sent!');
            resolve(false);
          });
      // eslint-disable-next-line
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

  // eslint-disable-next-line
  loginWithEmail = async (email: string, password: string): Promise<boolean> => new Promise((resolve, reject) => {
    this.auth.signInWithEmailAndPassword(email, password)
      // eslint-disable-next-line
      .then((data: any) => {
        // eslint-disable-next-line
        console.log('Successfully logged in!');
        resolve(true);
      // eslint-disable-next-line
      }).catch((error: any) => {
        // eslint-disable-next-line
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

  signOut = (): Promise<void> => this.auth.signOut();
}
export default new Firebase();
