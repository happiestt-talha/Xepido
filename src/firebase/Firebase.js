// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCANOZV7pHYhvoEKSXcoKGlUhWRFH9-L40",
    authDomain: "xepido.firebaseapp.com",
    projectId: "xepido",
    storageBucket: "xepido.appspot.com",
    messagingSenderId: "844424165642",
    appId: "1:844424165642:web:cfbd294d131097a534e2f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app