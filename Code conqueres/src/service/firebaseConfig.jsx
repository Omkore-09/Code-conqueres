
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAH9L34wV5lTQ3WCxsZdMejAZdW3lGxPnQ",
  authDomain: "trip-planer-425e5.firebaseapp.com",
  projectId: "trip-planer-425e5",
  storageBucket: "trip-planer-425e5.appspot.com",
  messagingSenderId: "1033774636195",
  appId: "1:1033774636195:web:8cf912c59280037a2fb316",
  measurementId: "G-YHTSZR5V6F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);