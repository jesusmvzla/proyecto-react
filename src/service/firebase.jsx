// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4fyzxrMketgOlw8NTRPAHaaHKQbDINMs",
    authDomain: "hit-airsoft.firebaseapp.com",
    projectId: "hit-airsoft",
    storageBucket: "hit-airsoft.firebasestorage.app",
    messagingSenderId: "318406610355",
    appId: "1:318406610355:web:4d4ab10431c1c6fb004fc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)