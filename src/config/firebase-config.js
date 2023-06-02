import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7xarmPik7FecMuodgnrlYzYrLurLC-jU",
  authDomain: "codersmonkeys-c9f4a.firebaseapp.com",
  projectId: "codersmonkeys-c9f4a",
  storageBucket: "codersmonkeys-c9f4a.appspot.com",
  messagingSenderId: "653392356360",
  appId: "1:653392356360:web:bcab7eda28d5004ff05dbd"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);