// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getReactNativePersistence,
  initializeAuth,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth/react-native";
import { getFirestore, doc, setDoc, onSnapshot } from "firebase/firestore";

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

const signupAndAddUserToDB = async (email, password) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  const db = getFirestore();
  await setDoc(doc(db, "users", auth.currentUser.uid), {
    firstName: "",
    lastName: "",
    profilePhoto: "",
    phoneNumber: "",
    myInspiration: [],
  });

  return res;
};

const unsubscribeListeners = [];

export const onSnapshotPro = (docRef, callBackFunc) => {
  const ubsub = onSnapshot(docRef, callBackFunc);
  unsubscribeListeners.push(ubsub);
};

export const signOutProxy = (auth) => {
  unsubscribeListeners.forEach((unsub) => {
    unsub();
  });
  signOut(auth);
};

export { auth, db, signupAndAddUserToDB };
export default app;
