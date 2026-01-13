// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 
const firebaseConfig = {
  apiKey: "AIzaSyAvQHmDVOmQvxG4DucAC9Rpm1OjlJC6nQ8",
  authDomain: "resumelens-6825e.firebaseapp.com",
  projectId: "resumelens-6825e",
  storageBucket: "resumelens-6825e.firebasestorage.app",
  messagingSenderId: "292592027342",
  appId: "1:292592027342:web:74fd690335dbdc5964729f",
  measurementId: "G-KCR33HSL12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // We only start the Database

// 1. Function to save the Analysis Result (The JSON from AI)
export async function saveAnalysis(data) {
  try {
    const docRef = await addDoc(collection(db, "analyses"), {
      ...data, // This saves the score, skills, etc.
      createdAt: new Date()
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    return null;
  }
}