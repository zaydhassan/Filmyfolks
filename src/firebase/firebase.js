import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBi9j7yHaNaB2AVpbi6RoSs0vE2_YQ2Hio",
  authDomain: "filmfolks-2e76a.firebaseapp.com",
  projectId: "filmfolks-2e76a",
  storageBucket: "filmfolks-2e76a.appspot.com",
  messagingSenderId: "430625465343",
  appId: "1:430625465343:web:e4a51f4ce1b123e9437dca"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");
export default app;
