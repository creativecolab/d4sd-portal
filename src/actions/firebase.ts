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

/**
 * Verify Firebase
 */

 
const db = firebase.firestore();
// const snapshot = await db
//   .collection("users")
//   .orderBy("lastModified")
//   .limit(100)
//   .get();

// const docRef = db.doc('users');

export const registerUser = (data: any) =>{
  // Add a new user w/ a generated id to "users" collection.
  console.log(data);
  let newUser = db.collection("users").doc().set({
    firstname: data.firstName,
    lastname: data.lastName,
    email: data.email,
    password: data.password
  }).then( () => {
    console.log("Document successfully written!");
  }).catch(error => {
    console.log("Error writing document: ", error);
  });

  console.log(newUser);
}
export const loginUser = () => {}
export const logoutUser = () => {}

const updatePassword = () => {}
const forgotPassword = () => {}
const updateProfile = () => {}

const submitFiles = () => {}

export default { firebaseConfig };