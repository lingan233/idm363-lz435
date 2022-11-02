// Import the functions you need from the SDKs you need
// import firebase from 'firebase/app';
// import 'firebase/firestore';

import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"; unable to reference

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {
  //apiKey: "AIzaSyC0FwJN_IAd9fZaQjx_QJg65G-5PsFD6qc",
  apiKey: `${import.meta.env.VITE_FIREBASE_API_KEY}`,
  authDomain: "mamartos-cat-shop.firebaseapp.com",
  projectId: "mamartos-cat-shop",
  storageBucket: "mamartos-cat-shop.appspot.com",
  messagingSenderId: "44818328247",
  appId: "1:44818328247:web:fc7b90fbe61e39094afb32",
  measurementId: "G-4YSPR3N7Q9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)