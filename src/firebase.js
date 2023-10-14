// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtNYWWTRRHAAVcPiR23_bXqHvOxcsDKBw",
  authDomain: "test-hosting-7b8b1.firebaseapp.com",
  projectId: "test-hosting-7b8b1",
  storageBucket: "test-hosting-7b8b1.appspot.com",
  messagingSenderId: "334322269590",
  appId: "1:334322269590:web:eb8236ba0641d7124af1b7",
  measurementId: "G-HEVHEZ4BH3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
