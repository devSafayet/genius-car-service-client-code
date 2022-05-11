// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDov723A6f44nfjfmUSMVqhPIqWWlOGr10",
  authDomain: "genius-car-service-directional.firebaseapp.com",
  projectId: "genius-car-service-directional",
  storageBucket: "genius-car-service-directional.appspot.com",
  messagingSenderId: "57289060111",
  appId: "1:57289060111:web:9a990b59db12c7b177987a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
