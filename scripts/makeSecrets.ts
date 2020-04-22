import Firebase from './firebase';
let serviceAccount = require("./privatekey.prod.json");
let app = new Firebase(serviceAccount);
app.appendUniqueSubmissionIDs()