// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBupoOPIIP83DTLaXdaLNbTY2r3YX6BZ_Q",
  authDomain: "the-news-dragon-d0bc1.firebaseapp.com",
  projectId: "the-news-dragon-d0bc1",
  storageBucket: "the-news-dragon-d0bc1.appspot.com",
  messagingSenderId: "1080667024904",
  appId: "1:1080667024904:web:87a91d576dda36fdf16bbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;