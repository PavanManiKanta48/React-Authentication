import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCP7500WnW1oilBi3MR04A4cRfEDcW-NZE",
  authDomain: "auth-85eb0.firebaseapp.com",
  projectId: "auth-85eb0",
  storageBucket: "auth-85eb0.appspot.com",
  messagingSenderId: "516213398865",
  appId: "1:516213398865:web:11f245beaa78b954760770",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
export default db;
