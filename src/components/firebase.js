import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAe3V07Eu2jXAiEfrUvmpk54ANbyCZQUWI",
  authDomain: "unterbau-45727.firebaseapp.com",
  projectId: "unterbau-45727",
  storageBucket: "unterbau-45727.firebasestorage.app",
  messagingSenderId: "492510625149",
  appId: "1:492510625149:web:ffeac380479d48f488e014",
  measurementId: "G-ZTGVD4TM2D"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app);

export default db;