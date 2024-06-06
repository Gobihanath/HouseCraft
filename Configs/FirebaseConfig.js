// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2RxW6PNgDgEvX4bMZZgM45ucpoz2zelE",
  authDomain: "business-dir-69c35.firebaseapp.com",
  projectId: "business-dir-69c35",
  storageBucket: "business-dir-69c35.appspot.com",
  messagingSenderId: "1050631034252",
  appId: "1:1050631034252:web:7a545e06b8eca271f9b2a9",
  measurementId: "G-M4J6515JE2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)
// const analytics = getAnalytics(app);
