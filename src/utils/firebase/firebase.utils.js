import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjWvcVVsFTpVkrePzlLzK0uKzfe9qkE9s",
  authDomain: "crwd-db-d4497.firebaseapp.com",
  projectId: "crwd-db-d4497",
  storageBucket: "crwd-db-d4497.appspot.com",
  messagingSenderId: "758866579374",
  appId: "1:758866579374:web:6e9b82ebb83c2ee12a823f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })

    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  // uf user data does NOT exist
  // create / set the document with the data from userAuth in my collection


  // if user data exists

  // return userDocRef
}