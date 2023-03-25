// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);