import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_API_KEY,
  databaseURL: process.env.REACT_APP_API_KEY,
  projectId: process.env.REACT_APP_API_KEY,
  storageBucket: process.env.REACT_APP_API_KEY,
  messagingSenderId: process.env.REACT_APP_API_KEY,
  appId: process.env.REACT_APP_API_KEY,
  measurementId: process.env.REACT_APP_API_KEY
};

firebase.initializeApp(firebaseConfig);