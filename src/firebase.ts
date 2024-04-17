// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4zt4L4aO17o3sDNO5nC6JE5m9D-rJ09s",
  authDomain: "toy1-2b9db.firebaseapp.com",
  projectId: "toy1-2b9db",
  storageBucket: "toy1-2b9db.appspot.com",
  messagingSenderId: "144766958858",
  appId: "1:144766958858:web:bc720ebc919fbe77720ef3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
export const db = getFirestore(app);
