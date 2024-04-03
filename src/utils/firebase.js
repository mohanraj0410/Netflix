// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdj7TBQ4OkpER5wgaPVxOmryftFWdlLyQ",
  authDomain: "netflix-clone-1b4f4.firebaseapp.com",
  projectId: "netflix-clone-1b4f4",
  storageBucket: "netflix-clone-1b4f4.appspot.com",
  messagingSenderId: "820429694156",
  appId: "1:820429694156:web:73dc4c4b3a0acea7cece69",
  measurementId: "G-L0EZPM88GS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
