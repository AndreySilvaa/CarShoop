import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
//import {getFirestore} from 'firebase/firestore' // Importe essa funcionalidade para usar o db

const firebaseConfig = {
  apiKey: "AIzaSyDjeaJnhsVcM7ElDWbH39VAOR_uOWyuy84",
  authDomain: "carshoop-2ef6a.firebaseapp.com",
  projectId: "carshoop-2ef6a",
  storageBucket: "carshoop-2ef6a.appspot.com",
  messagingSenderId: "423779008426",
  appId: "1:423779008426:web:4ecad8b9692b1cb656b5d3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
