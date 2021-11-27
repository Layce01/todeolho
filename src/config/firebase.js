import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRHtdPnhBXG5UcLXWc9YfDY7O5lo0OArk",
  authDomain: "tcc-todeolho.firebaseapp.com",
  databaseURL: "https://tcc-todeolho-default-rtdb.firebaseio.com",
  projectId: "tcc-todeolho",
  storageBucket: "tcc-todeolho.appspot.com",
  messagingSenderId: "476890542624",
  appId: "1:476890542624:web:2c7e36d253e14d38678245"
};

  // Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);