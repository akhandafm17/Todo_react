

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
   apiKey: "AIzaSyAM-PTvyDygTz1pQH5AuARZ-Cs0JEUCbT4",
   authDomain: "todo-app-react-95bdf.firebaseapp.com",
   projectId: "todo-app-react-95bdf",
   storageBucket: "todo-app-react-95bdf.appspot.com",
   messagingSenderId: "704000039070",
   appId: "1:704000039070:web:c6da251c4aaefbb621038f",
   measurementId: "G-R0R07B0GRJ"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();
export default db;
