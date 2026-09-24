
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDIOkp7Sq7i8ehorI0LhX2XWmq-5aHSl9E",
  authDomain: "cadastrologinlogout.firebaseapp.com",
  projectId: "cadastrologinlogout",
  storageBucket: "cadastrologinlogout.firebasestorage.app",
  messagingSenderId: "377250802345",
  appId: "1:377250802345:web:c6f5d514e7a619d4c0d7b8",
  measurementId: "G-KR24MQ5F3N"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);