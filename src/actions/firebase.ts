import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
});

const db = firebase.firestore();

/**
 * registerUser - adds user to firestore.
 * TODO: validation w/ block if account already exists
 * TODO: tighten firestore rules
 * @param data - passed in from signup-card 'sign-up' button click.
 */
export const registerUser = (data: any) =>{
  // Add a new user w/ a generated id to "users" collection.
  console.log(data);
  db.collection("users").doc().set({
    firstname: data.firstName,
    lastname: data.lastName,
    email: data.email,
    password: data.password
  }).then( () => {
    console.log("Document successfully written!");
  }).catch(error => {
    console.log("Error writing document: ", error);
  });
}

export const loginUser = () => {}
export const logoutUser = () => {}

const updatePassword = () => {}
const forgotPassword = () => {}
const updateProfile = () => {}

const submitFiles = () => {}

export default { firebaseConfig };