// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyALFkZ3uPRA3_UCA5i8Ts4MMJgGP6w5_cQ",
  authDomain: "whatsappclone-63554.firebaseapp.com",
  projectId: "whatsappclone-63554",
  storageBucket: "whatsappclone-63554.appspot.com",
  messagingSenderId: "460653839226",
  appId: "1:460653839226:web:85ec3f41e1be8ec3ed8cc3",
  measurementId: "G-5Z4DBLY3HM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;