// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMnplynN48yBXj8NIc0L6tHr-MtfgytHI",
    authDomain: "bnb-56f7e.firebaseapp.com",
    projectId: "bnb-56f7e",
    storageBucket: "bnb-56f7e.appspot.com",
    messagingSenderId: "198397956488",
    appId: "1:198397956488:web:578c69cb15a392d1526a3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;