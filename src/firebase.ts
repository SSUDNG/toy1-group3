// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSEGING_SENDER_ID,
  appId: process.env.REACT_APP_MEASUREMENT_ID,

  // apiKey: "AIzaSyD4zt4L4aO17o3sDNO5nC6JE5m9D-rJ09s",
  // authDomain: "toy1-2b9db.firebaseapp.com",
  // projectId: "toy1-2b9db",
  // storageBucket: "toy1-2b9db.appspot.com",
  // messagingSenderId: "144766958858",
  // appId: "1:144766958858:web:bc720ebc919fbe77720ef3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
export const db = getFirestore(app);
