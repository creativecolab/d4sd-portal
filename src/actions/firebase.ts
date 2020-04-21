import firebase from 'firebase';
import app from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';
import { message } from '@d4sd/components';
import { Feedback, FeedbackData } from './types';

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

  /**
   * Get feedback for submission associated with a document id, which is associated with the row on the sheets
   */
  getFeedbackForSubmission = (documentID: string): Promise<Array<FeedbackData>> => {
    return new Promise((resolve, reject) => {
      app.firestore().collection('submissionIDs').doc(documentID).get().then((res) => {
        let data = res.data();

        if (data) {
          let submitID = (data.submitID).toString();
          app.firestore().collection('feedback-data').where("submissionID", "==", `${submitID}`).get().then((res) => {

            let mapped: any = (res.docs).map((doc) => {
              return {...doc.data(), documentID: doc.id}
            });
            
            let finalMap = <Array<FeedbackData>>(mapped.map((data: any) => {
              data.created = new Date(data.created.seconds * 1000);
              return data;
            }));
            resolve(finalMap);
          });
        }
        else {
          resolve([])
        }
      });
    })
  }
  /**
   * Get one feedback row
   */
  getSingleFeedbackForSubmission = async (documentID: string): Promise<FeedbackData> => {
    return new Promise((resolve, reject) => {
      app.firestore().collection('feedback-data').doc(documentID).get().then((res) => {
        let data = res.data();
        if (data) {
          resolve(<FeedbackData>data)
        }
        else {
          resolve(undefined);
        }
      });
    });
  }
  submitFeedback = async (feedback: Feedback) => {
    return app.firestore().collection('feedback-data').add({
      ...feedback,
      created: firebase.firestore.Timestamp.now()
    });
  }

  getSubmitID = async (documentID: string) => {
    return new Promise((resolve, reject) => {
      app.firestore().collection('submissionIDs').doc(documentID).get().then((res) => {
        let data = res.data();
        if (data) {
          resolve(data);
        }
        else {
          reject();
        }
      });
    })
  }
  getDocumentIDofSubmitID = async (submitID: string) => {
    return new Promise((resolve, reject) => {
      app.firestore().collection('submissionIDs').where('submitID', '==', parseInt(submitID)).get().then((res) => {
        console.log(res.docs);
        let data = res.docs[0];
        if (data) {
          resolve(data.id);
        }
        else {
          reject();
        }
      });
    })
  }

  /**
   * Do not use
   */
  // appendUniqueSubmissionIDs = (start:number = 1, end: number = 500) => {
  //   // goes from id 1 to 100
  //   for (let i = start; i <= end; i++) {
  //     app.firestore().collection('submissionIDs').add({
  //       submitID: i
  //     });
  //   }
  // }

  // script to get secret urls and the submission emails
  getSecretURLs = () => {
    app.firestore().collection('submissionIDs').where('submitID', '<', 100).get().then((res) => {
      let data = res.docs.map((doc) => {
        return {
          secretID: doc.id,
          ...doc.data(),
          feedbackLink: `https://d4sd.org/volunteer/provide_feedback/${doc.id}`,
          viewFeedbackLink: `https://d4sd.org/community-feedback/${doc.id}`,
          email: ''
        }
      });
      if (data) {
        
        const range = `C${2}:C${1000}`
        const API_KEY = "AIzaSyB4YEb9HIR_BeSCGYrgezusX3HSgiWHg9c"
        const sheetID = "1yaDW5Qwzt1OnhMh70Z_HXlsM7MbHPCLq9y3kkkJqWdQ";
        // get emails
        let uri = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${range}?key=${API_KEY}`
        
        fetch(uri, {
          method: 'GET',
          headers: {
            Accept: 'application/json'
          }
        }).then((res) => res.json()).then((res) => {
          let vals = res.values;
          for (let i = 0; i < vals.length; i++) {
            data[i].email = vals[i][0];
          }
          data = data.splice(0, vals.length);

          // create the csv rows
          let rows = [['email', 'feedback link', 'view feedback link', 'secret ID', 'response row number on sheets']];
          rows.push(...data.map((info) => {
            // @ts-ignore
            return [info.email, info.feedbackLink, info.viewFeedbackLink, info.secretID, info.submitID]
          }));

          let csvContent = "data:text/csv;charset=utf-8," 
          + rows.map(e => e.join(",")).join("\n");
          var encodedUri = encodeURI(csvContent);
          window.open(encodedUri);
        });
      }
    });
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
          url: 'http://staging-d4sd.ucsd.edu:8080/',
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
