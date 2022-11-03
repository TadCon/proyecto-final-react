// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcqIpsHWE8gO8LEl09PpDryHz_NxS_vE0",
  authDomain: "cursocoderhouse-21247.firebaseapp.com",
  projectId: "cursocoderhouse-21247",
  storageBucket: "cursocoderhouse-21247.appspot.com",
  messagingSenderId: "600180516989",
  appId: "1:600180516989:web:a27f62123f319dfd7a6914"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreInit = () => app;