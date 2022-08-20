// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getReactNativePersistence,
  updateProfile,
  initializeAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth/react-native";
import { getFirestore, doc, setDoc } from "firebase/firestore";

import Constants from "expo-constants";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: Constants.manifest?.extra?.firebaseApiKey,
  authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
  projectId: Constants.manifest?.extra?.firebaseProjectId,
  storageBucket: Constants.manifest?.extra?.firebaseStorageBucket,
  messagingSenderId: Constants.manifest?.extra?.firebaseMessagingSenderId,
  appId: Constants.manifest?.extra?.firebaseAppId,
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = getFirestore();

const signupAndAddUserToDB = async (email, password, fullName) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(auth.currentUser, { displayName: fullName });
  const db = getFirestore();
  await setDoc(doc(db, "users", auth.currentUser.uid), {
    fullName: fullName,
  });

  return res;
};

export { auth, db, signupAndAddUserToDB };
export default app;
