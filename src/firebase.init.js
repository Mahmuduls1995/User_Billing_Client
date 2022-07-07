// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  
  apiKey: "AIzaSyA7xZwAyQybaKTtZwhxgiej0mftxlhCT4Q",
  authDomain: "billing-system-b6389.firebaseapp.com",
  projectId: "billing-system-b6389",
  storageBucket: "billing-system-b6389.appspot.com",
  messagingSenderId: "893073628160",
  appId: "1:893073628160:web:6b8f6a0ab3f9c921fc4ce5"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;



