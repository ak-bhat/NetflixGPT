// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeFFD5G7VGMAiYs_qT5nNbVq_ythUDyq8",
  authDomain: "netflixgpt-ea312.firebaseapp.com",
  projectId: "netflixgpt-ea312",
  storageBucket: "netflixgpt-ea312.firebasestorage.app",
  messagingSenderId: "953558264678",
  appId: "1:953558264678:web:50ce4726853d6e1c6636a7",
  measurementId: "G-3P7G9SBXJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);