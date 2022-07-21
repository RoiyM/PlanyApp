// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Constants from "expo-constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPMYhTaccd7ofuaG0kxUHFttK82WcIhoA",
  authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
  projectId: Constants.manifest?.extra?.firebaseProjectId,
  storageBucket: Constants.manifest?.extra?.firebaseStorageBucket,
  messagingSenderId: Constants.manifest?.extra?.firebaseMessagingSenderId,
  appId: Constants.manifest?.extra?.firebaseAppId,
};
// FIREBASE_API_KEY: "AIzaSyCPMYhTaccd7ofuaG0kxUHFttK82WcIhoA",
// FIREBASE_AUTH_DOMAIN: "planymobileapp.firebaseapp.com",
// FIREBASE_PROJECT_ID: "planymobileapp",
// FIREBASE_STORAGE_BUCKET: "planymobileapp.appspot.com",
// FIREBASE_MESSAGING_SENDER_ID: "633844116417",
// FIREBASE_APP_ID: "1:633844116417:web:00494da29a7086fa7b5d40"

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

// const firebaseConfig = {
//   apiKey: Constants.manifest?.extra?.firebaseApiKey,
//   authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
//   projectId: Constants.manifest?.extra?.firebaseProjectId,
//   storageBucket: Constants.manifest?.extra?.firebaseStorageBucket,
//   messagingSenderId: Constants.manifest?.extra?.firebaseMessagingSenderId,
//   appId: Constants.manifest?.extra?.firebaseAppId,
// };
