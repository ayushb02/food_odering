// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}  from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC9d4Xydmco9jFpbSflyteQBpkFqZBYOhU",
  authDomain: "foodie-6af95.firebaseapp.com",
  projectId: "foodie-6af95",
  storageBucket: "foodie-6af95.appspot.com",
  messagingSenderId: "911164510312",
  appId: "1:911164510312:web:ab207776110ade2469ebdd",
  measurementId: "G-CKBZ7FZWTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app , auth};
