// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5kOxduZrLJw-qQokAgIh9AZxKNZ3egLM",
  authDomain: "testing-20756.firebaseapp.com",
  projectId: "testing-20756",
  storageBucket: "testing-20756.firebasestorage.app",
  messagingSenderId: "362252371879",
  appId: "1:362252371879:web:cdfe7ed40f330b8b979882",
  measurementId: "G-CPCQL64PDH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider, signInWithPopup, signOut };