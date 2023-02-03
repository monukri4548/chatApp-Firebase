import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhPtIDtBH2zC8ZbbOhiWaC5CVX8JNtY14",
  authDomain: "monuchat-36876.firebaseapp.com",
  projectId: "monuchat-36876",
  storageBucket: "monuchat-36876.appspot.com",
  messagingSenderId: "974745847874",
  appId: "1:974745847874:web:20bbc537f2f7fe4dc105db",
  measurementId: "G-GYW3BE3DST"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
