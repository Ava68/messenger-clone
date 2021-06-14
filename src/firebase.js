import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDFIdC8cwQehtqvi8rrWd_wWUCvyFKZ1oY",
  authDomain: "messenger-clone-f48cc.firebaseapp.com",
  projectId: "messenger-clone-f48cc",
  storageBucket: "messenger-clone-f48cc.appspot.com",
  messagingSenderId: "164088647388",
  appId: "1:164088647388:web:b81de740f9a9841e6c6e19",
});

const db = firebase.firestore();

export default db;
