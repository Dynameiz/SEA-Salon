// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOlUnKrrW_Wr5QJaTcZx6NCJ6C939L4Qs",
  authDomain: "sea-salon-307ad.firebaseapp.com",
  projectId: "sea-salon-307ad",
  storageBucket: "sea-salon-307ad.appspot.com",
  messagingSenderId: "203749270417",
  appId: "1:203749270417:web:4550313d43c69114d3b030",
  measurementId: "G-C6KJMHS7CP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);