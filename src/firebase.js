import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB5oGCCsuuQnIOADIfX7ynx5RpqR_kA5s4",
  authDomain: "nisha-disney-clone.firebaseapp.com",
  projectId: "nisha-disney-clone",
  storageBucket: "nisha-disney-clone.appspot.com",
  messagingSenderId: "1051887920742",
  appId: "1:1051887920742:web:6e40b30cb5cc6e768d2fa7",
  measurementId: "G-401S32X4TT"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;