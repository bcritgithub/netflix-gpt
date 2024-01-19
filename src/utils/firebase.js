// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA99W6bjo4iJA6Rpz9HTItXQtgIrK_SqCA",
  authDomain: "netflixgpt-bb221.firebaseapp.com",
  projectId: "netflixgpt-bb221",
  storageBucket: "netflixgpt-bb221.appspot.com",
  messagingSenderId: "913476633595",
  appId: "1:913476633595:web:a856fc93f8c3c21e58415e",
  measurementId: "G-0TNSWG3M8K"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();