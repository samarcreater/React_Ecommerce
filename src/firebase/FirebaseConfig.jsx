// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAc9X3oGCxjy-7ZPdn6wiNug3CFe7QVtA",
  authDomain: "eommer-a3c6e.firebaseapp.com",
  projectId: "eommer-a3c6e",
  storageBucket: "eommer-a3c6e.appspot.com",
  messagingSenderId: "587209018979",
  appId: "1:587209018979:web:a2d59e49ab5f31b77ef256",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
