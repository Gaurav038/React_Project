import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCLdBQFAuJCww84qNJdtQAo3HLISm5gUAE",
  authDomain: "twitter-clone-e5c7f.firebaseapp.com",
  projectId: "twitter-clone-e5c7f",
  storageBucket: "twitter-clone-e5c7f.appspot.com",
  messagingSenderId: "663667859640",
  appId: "1:663667859640:web:2765178d5be1f1cb68144d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;