import Firebase from './firebase';
import fs from 'fs';

let serviceAccount = require("./privatekey.staging.json");
let app = new Firebase(serviceAccount)
app.getSecretURLs().then((rows: any)=> {
  let csv = `"${rows.join('"\n"').replace(/,/g, '","')}"`;
  fs.writeFile('getCommunityFeedbackLinks.csv', csv, 'utf8', function(err) {
    if (err) {
      console.log('Some error occured - file either not saved or corrupted file saved.');
    } else {
      console.log('Saved to ./getCommunityFeedbackLinks.csv');
    }
  });
});