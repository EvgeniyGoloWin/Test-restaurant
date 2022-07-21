import { initializeApp } from "firebase/app";
import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
   apiKey: "AIzaSyCiJS4WY3tzpRkM86GiM8sqAwCHCLlXPdE",
   authDomain: "roma-7c440.firebaseapp.com",
   projectId: "roma-7c440",
   storageBucket: "roma-7c440.appspot.com",
   messagingSenderId: "1063181160223",
   appId: "1:1063181160223:web:c2ff35d66db4ea7f992a2a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const firebaseAuth = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const firebaseCreateUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const firebaseSignOut = () => signOut(auth);