// src/firebaseConfig.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-OfF-UovI5r12Tb5vrAr6VjcWwp_ca5w",
  authDomain: "ka-wuzi.firebaseapp.com",
  projectId: "ka-wuzi",
  storageBucket: "ka-wuzi.firebasestorage.app",
  messagingSenderId: "280831538840",
  appId: "1:280831538840:web:b1d86cd1c257ed44b542ed",
  measurementId: "G-WWRXJHZVJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);