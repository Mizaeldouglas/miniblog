import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCXRDFNbXWLI5buheJrfrc1D6pt5JCHytU",
  authDomain: "miniblog-8a241.firebaseapp.com",
  projectId: "miniblog-8a241",
  storageBucket: "miniblog-8a241.appspot.com",
  messagingSenderId: "789612412492",
  appId: "1:789612412492:web:3c202dc1463e0dd8687ee9"
};

const app = initializeApp(firebaseConfig);

const db= getFirestore(app);

export { db };