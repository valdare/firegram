import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

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

export {projectStorage, projectFirestore};