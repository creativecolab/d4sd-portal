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
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

class Firebase {
  // eslint-disable-next-line
  auth: any;

  // eslint-disable-next-line
  db: any;

  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  login = (email: string, password: string): Promise<boolean> => new Promise((resolve, reject) => {
    this
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(() => { resolve(true); })
      .catch((error: string) => { reject(error); });
  })

  // eslint-disable-next-line
  logout = (): any => this.auth.signOut()

  // eslint-disable-next-line max-len
  register = (firstName: string, lastName: string, email: string, password: string): Promise<boolean> => new Promise((resolve, reject) => {
    this
      .auth
      .createUserWithEmailAndPassword(email, password)
      // eslint-disable-next-line
      .then((data: any) => {
        const actionCodeSettings = {
          url: 'https://d4sd-portal.netlify.com/',
          handleCodeInApp: true
        };

        // Verify Email
        data.user.sendEmailVerification(actionCodeSettings)
          .then(() => {
            // eslint-disable-next-line
            console.log('Email Sent!');
          })
          .catch(() => {
            // eslint-disable-next-line
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
            ethics: false
          })
          .then(() => {
            // eslint-disable-next-line
            console.log('User document added!');
            resolve(true);
          })
        // eslint-disable-next-line
          .catch((error: any) => {
            // eslint-disable-next-line
            console.log('Error writing document: ', error);
            error.message('OOps');
            reject(error);
          });
        resolve(true);
      })
    // eslint-disable-next-line
      .catch((error: any) => {
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
  })

  // eslint-disable-next-line
  isInitialized = () => {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  // eslint-disable-next-line
  getCurrentUsername = () => {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }

  // eslint-disable-next-line
  async getCurrentUserQuote() {
    const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get();
    return quote.get('quote');
  }
}

export default new Firebase();
