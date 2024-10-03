// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqDNV3O8MWZcUKpjuFQ4CfUBA7KMyOs1M",
  authDomain: "productnatura-65cdd.firebaseapp.com",
  projectId: "productnatura-65cdd",
  storageBucket: "productnatura-65cdd.appspot.com",
  messagingSenderId: "991275314924",
  appId: "1:991275314924:web:1e38fdd2c4e9f3bc5c7fc9"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const auth = initializeAuth(firebase, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
