import admin from "firebase-admin";
import fetch from 'node-fetch';
let serviceAccount = require("./privatekey.json");

let app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://d4sd-2020.firebaseio.com"
});

class Firebase {
  // eslint-disable-next-line
  auth: any;

  // eslint-disable-next-line
  db: any;

  constructor() {

    this.auth = app.auth();
    this.db = app.firestore();
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
    this.db.collection('submissionIDs').where('submitID', '<', 100).get().then((res: any) => {
      let data = res.docs.map((doc: any) => {
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
        
        fetch(uri).then((res) => res.json()).then((res: any) => {
          let vals = res.values;
          for (let i = 0; i < vals.length; i++) {
            data[i].email = vals[i][0];
          }
          data = data.splice(0, vals.length);

          // create the csv rows
          let rows = [['email', 'feedback link', 'view feedback link', 'secret ID', 'response row number on sheets']];
          rows.push(...data.map((info: any) => {
            // @ts-ignore
            return [info.email, info.feedbackLink, info.viewFeedbackLink, info.secretID, info.submitID]
          }));

          let csvContent = "data:text/csv;charset=utf-8," 
          + rows.map(e => e.join(",")).join("\n");
          // var encodedUri = encodeURI(csvContent);
          // window.open(encodedUri);
          console.log(rows);
        });
      }
    });
  }
}

export default new Firebase();
