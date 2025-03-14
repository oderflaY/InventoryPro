// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbDFy6fMmsMySIXVTnH9M9bgwh1m2uksM",
  authDomain: "inventorypro-2025.firebaseapp.com",
  projectId: "inventorypro-2025",
  storageBucket: "inventorypro-2025.firebasestorage.app",
  messagingSenderId: "1021807321182",
  appId: "1:1021807321182:web:21ddfa7b0d8f0011c4d4cf",
  measurementId: "G-REXLL2CTLK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider, signInWithPopup, signOut };