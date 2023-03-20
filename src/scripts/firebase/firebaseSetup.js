import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD_e4KvhslpeUzOeEOjT0M4qW8sr87f5OE",
  authDomain: "bright-brain-lms.firebaseapp.com",
  projectId: "bright-brain-lms",
  storageBucket: "bright-brain-lms.appspot.com",
  messagingSenderId: "376241672751",
  appId: "1:376241672751:web:67bf95ab7e9460d7ecacda",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);
export const cloudStorage = getStorage(app);
