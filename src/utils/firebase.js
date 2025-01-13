// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuG13vn-mEzgfoROj19iN-sdk80hKyVlQ",
  authDomain: "netflixgpt-ea312.firebaseapp.com",
  projectId: "netflixgpt-ea312",
  storageBucket: "netflixgpt-ea312.firebasestorage.app",
  messagingSenderId: "953558264678",
  appId: "1:953558264678:web:0ada42486ab702836636a7",
  measurementId: "G-1CSJ0MT20B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();  // For signin signup logic
