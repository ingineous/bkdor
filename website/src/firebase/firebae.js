// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGG58huFFu9NkiQ2zwqeZssTUJebIzDvs",
  authDomain: "backdoor-pog.firebaseapp.com",
  projectId: "backdoor-pog",
  storageBucket: "backdoor-pog.appspot.com",
  messagingSenderId: "768229330003",
  appId: "1:768229330003:web:fb55216981d1ecc53c8aa6",
  measurementId: "G-BK2J5VTZGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)

export default app

