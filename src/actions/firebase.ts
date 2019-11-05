import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_API_KEY,
  databaseURL: process.env.REACT_APP_API_KEY,
  projectId: process.env.REACT_APP_API_KEY,
  storageBucket: process.env.REACT_APP_API_KEY,
  messagingSenderId: process.env.REACT_APP_API_KEY,
  appId: process.env.REACT_APP_API_KEY,
  measurementId: process.env.REAsCT_APP_API_KEY
});

let db = firebase.firestore;

export default { firebaseConfig };