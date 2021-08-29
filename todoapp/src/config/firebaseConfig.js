import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyAq_CJt-L1k0AvagNAIw_pPRd3QuvU4EkA",
    authDomain: "todo-app-ae444.firebaseapp.com",
    projectId: "todo-app-ae444",
    storageBucket: "todo-app-ae444.appspot.com",
    messagingSenderId: "208678183607",
    appId: "1:208678183607:web:c0ab48497f99d1e3e72332"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;