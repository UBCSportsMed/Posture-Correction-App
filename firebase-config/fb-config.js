// Import the functions you need from the SDKs you need
import  { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5c02DjNMWFYYV4NImV403J5OIH93dkZQ",
  authDomain: "sports-med-app.firebaseapp.com",
  projectId: "sports-med-app",
  storageBucket: "sports-med-app.appspot.com",
  messagingSenderId: "321802447959",
  appId: "1:321802447959:web:ed98fc02b71386ecaf4712",
  measurementId: "G-LMQPYXL3D5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore(app);