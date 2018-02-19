import * as firebase from "firebase";

 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyCUch2ODyEm6VCq0JK5knU7IRZw4MxUOG4",
  authDomain: "web-quick-start-7e53c.firebaseapp.com",
  databaseURL: "https://web-quick-start-7e53c.firebaseio.com",
  projectId: "web-quick-start-7e53c",
  storageBucket: "web-quick-start-7e53c.appspot.com",
  messagingSenderId: "507231779996"
};
firebase.initializeApp(config);

export const fireDb = firebase.database()
