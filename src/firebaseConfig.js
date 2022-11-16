// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkFd2_ce__K542chWh3B7Sda8IVz5q4zI",
    authDomain: "bnb-c116f.firebaseapp.com",
    projectId: "bnb-c116f",
    storageBucket: "bnb-c116f.appspot.com",
    messagingSenderId: "631781774596",
    appId: "1:631781774596:web:18990fb9f2af0f577f6c51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;