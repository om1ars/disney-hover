import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDlQb53qmZTsUykc18GTIoJMkElrf4ERQM",
  authDomain: "twitter-67a46.firebaseapp.com",
  projectId: "twitter-67a46",
  storageBucket: "twitter-67a46.appspot.com",
  messagingSenderId: "232906508135",
  appId: "1:232906508135:web:1552f1ac284b164f9811c2"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
