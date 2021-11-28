import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLYsiGOYfCkrFfdfQwUz1TaZxiXUR6hvI",
    authDomain: "val-firegram.firebaseapp.com",
    projectId: "val-firegram",
    storageBucket: "val-firegram.appspot.com",
    messagingSenderId: "171992488173",
    appId: "1:171992488173:web:1368d2f40647d8767394e4"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};