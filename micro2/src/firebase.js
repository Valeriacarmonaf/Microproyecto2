/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCU3GhvsGlhEJHx6JFaMKykLZXHC-gAX_g",
  authDomain: "microproyecto2carmonas.firebaseapp.com",
  projectId: "microproyecto2carmonas",
  storageBucket: "microproyecto2carmonas.appspot.com",
  messagingSenderId: "201986506184",
  appId: "1:201986506184:web:a8810730f80ced629514fd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export { app, db};