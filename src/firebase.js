// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADUPT65KcK8QUL1ZEQITO3S9RkPf7JkcI",
  authDomain: "photogallery-393dc.firebaseapp.com",
  projectId: "photogallery-393dc",
  storageBucket: "photogallery-393dc.appspot.com",
  messagingSenderId: "274199595630",
  appId: "1:274199595630:web:452d24f4900cc07319747f",
  measurementId: "G-N9Z92E9PHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {app}