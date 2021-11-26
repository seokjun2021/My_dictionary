// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3nzNv_a1B4QW95g-W_DYOPStkJOZ8mVY",
  authDomain: "my-dictionary2-d7467.firebaseapp.com",
  projectId: "my-dictionary2-d7467",
  storageBucket: "my-dictionary2-d7467.appspot.com",
  messagingSenderId: "151887017816",
  appId: "1:151887017816:web:7c51fb9307eaafea40d72d",
  measurementId: "G-HXMYJ1ZSXC"
};
initializeApp(firebaseConfig); //기초설정을 해줄때는 변수 x
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();