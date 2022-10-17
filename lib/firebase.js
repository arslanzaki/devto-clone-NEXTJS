import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtP-00DUXP0wcNPuwPSUU7eu-d5kssHJg",
  authDomain: "devto-clone-a927c.firebaseapp.com",
  projectId: "devto-clone-a927c",
  storageBucket: "devto-clone-a927c.appspot.com",
  messagingSenderId: "774963741250",
  appId: "1:774963741250:web:93f8efa6fa26ceb06b63db",
};

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

export const firestore = getFirestore(app);
export const storage = getStorage(app);
