import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBtP-00DUXP0wcNPuwPSUU7eu-d5kssHJg",
  authDomain: "devto-clone-a927c.firebaseapp.com",
  projectId: "devto-clone-a927c",
  storageBucket: "devto-clone-a927c.appspot.com",
  messagingSenderId: "774963741250",
  appId: "1:774963741250:web:93f8efa6fa26ceb06b63db",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
