// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmKQ0hZq-d3fCnmsiiqNHrOg760Fhmcjw",
  authDomain: "online-job-portal-745b1.firebaseapp.com",
  projectId: "online-job-portal-745b1",
  storageBucket: "online-job-portal-745b1.firebasestorage.app",
  messagingSenderId: "1069114970198",
  appId: "1:1069114970198:web:c9ce5464132ce4d0566bf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db};