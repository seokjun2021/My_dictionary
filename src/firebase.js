// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcJfXAVMekBqFKY_G4e9e19ZXQYi1WlG4",
  authDomain: "my-dictionary-fb600.firebaseapp.com",
  projectId: "my-dictionary-fb600",
  storageBucket: "my-dictionary-fb600.appspot.com",
  messagingSenderId: "539089635361",
  appId: "1:539089635361:web:466c213e357d0bba72bb60",
  measurementId: "G-2S6JFHR6DH"
};
initializeApp(firebaseConfig); //기초설정을 해줄때는 변수 x
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();