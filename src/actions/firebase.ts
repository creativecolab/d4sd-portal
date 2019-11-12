  
import app, { firestore } from 'firebase/app'
import 'firebase/firebase-auth'
import 'firebase/firebase-firestore'
import { any } from 'prop-types';
import { resolveSoa } from 'dns';
// import 'firebase/@firestore-types'

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

  login(email:any, password:any){return this.auth.signInWithEmailAndPassword(email, password)}
  logout() {return this.auth.signOut();}

  async register(props:any, firstName: any, lastName: any, email: any, password: any){
    await this
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then((data: any) => {
        console.log("uid", data.user.uid);
        app.firestore().collection("users")
          .doc(data.user.uid)
          .set({
            firstName,
            lastName,
            email
          })
          .then((docRef:any) => {
            console.log("User document added!");
            props.history.replace('/');
            return null;
          })
          .catch((error:any) =>{
            console.error("Error writing document: ", error);
            props.history.replace('/signup')
          });
          return null;
      })
      .catch((error: any) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode === 'auth/weak-password'){
          console.log("The password is too weak.");
        } else {
          //UI output account already exists
          console.log(errorMessage);
        }
        console.log(error);
      });
  }

  isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
  }
  getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
  }
  async getCurrentUserQuote() {
		const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
		return quote.get('quote')
  }
  
}

// const signupUser = (data: any) => {};
// const updatePassword = () => {}
// const forgotPassword = () => {}
// const updateProfile = () => {}
// const submitFiles = () => {}

export default new Firebase();