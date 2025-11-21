// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only in browser environment)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// Initialize Firestore
const db = getFirestore(app);

// Function to save email to Firestore
export const saveEmail = async (email: string) => {
  try {
    // Normalize email to lowercase for comparison
    const normalizedEmail = email.toLowerCase().trim();

    // Check if email already exists
    const emailsRef = collection(db, "emails");
    const q = query(emailsRef, where("email", "==", normalizedEmail));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      throw new Error(
        "This email has already been registered. Please use a different email."
      );
    }

    // Email doesn't exist, save it
    const docRef = await addDoc(collection(db, "emails"), {
      email: normalizedEmail,
      timestamp: new Date(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error saving email:", error);
    throw error;
  }
};

export { app, analytics, db };
