import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_API_KEY,
  databaseURL: process.env.REACT_APP_API_KEY,
  projectId: process.env.REACT_APP_API_KEY,
  storageBucket: process.env.REACT_APP_API_KEY,
  messagingSenderId: process.env.REACT_APP_API_KEY,
  appId: process.env.REACT_APP_API_KEY,
  measurementId: process.env.REACT_APP_API_KEY
});

let db = firebase.firestore;

db.collection("users").add({
  first: "Ada",
  last: "Lovelace",
  born: 1815
});

// .then(function(docRef) {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//   console.error("Error adding document: ", error);
// });