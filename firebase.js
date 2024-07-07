// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnF3N2t6WRxhGG6pE_cB4XkCIKQeaj0-k",
  authDomain: "razon-f5c95.firebaseapp.com",
  projectId: "razon-f5c95",
  storageBucket: "razon-f5c95.appspot.com",
  messagingSenderId: "640585548054",
  appId: "1:640585548054:web:b49a52cbfe6d41a59a1037",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
