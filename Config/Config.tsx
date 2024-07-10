
import { initializeApp } from "firebase/app";

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDhH9YWiSAeChD9FYpKlTH3RG3d7yLTBqc",
  authDomain: "appprueba-f57de.firebaseapp.com",
  databaseURL: "https://appprueba-f57de-default-rtdb.firebaseio.com",
  projectId: "appprueba-f57de",
  storageBucket: "appprueba-f57de.appspot.com",
  messagingSenderId: "928333993002",
  appId: "1:928333993002:web:28bcf20fc89038c2de5f53"
};
const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
  
  export const storage = getStorage(app);