// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDhls3UP4vyDFfHfaqB4_nHY-abLN4sScc",
  authDomain: "groupd-d5382.firebaseapp.com",
  projectId: "groupd-d5382",
  storageBucket: "groupd-d5382.appspot.com",
  messagingSenderId: "454410034775",
  appId: "1:454410034775:web:330ed94e62227df70f8d12",
  measurementId: "G-PV7ZKSR7YE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);