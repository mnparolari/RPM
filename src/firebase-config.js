// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1EaBxDCCM3TbW7b9vO6_a8Bbs1ah97h0",
    authDomain: "npm-la-casa-del-vinilo.firebaseapp.com",
    projectId: "npm-la-casa-del-vinilo",
    storageBucket: "npm-la-casa-del-vinilo.appspot.com",
    messagingSenderId: "535050468934",
    appId: "1:535050468934:web:f3093893676f2996bb9447"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)