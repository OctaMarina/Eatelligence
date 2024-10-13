import { initializeApp } from "firebase/app";

import { initializeAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';  // Import corect pentru AsyncStorage
//@ts-ignore
import { getReactNativePersistence } from '@firebase/auth/dist/rn/index.js';
// Tipurile pentru configurarea Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAQxN2Djlz7poUJXwgtnPdnzPJ-rzV7WUo",
    authDomain: "unplugged-e9593.firebaseapp.com",
    projectId: "unplugged-e9593",
    storageBucket: "unplugged-e9593.appspot.com",
    messagingSenderId: "107258759325",
    appId: "1:107258759325:web:baf8cb7d3c83019b2cec74",
    measurementId: "G-WS61E5VRXG"
};

// Inițializează aplicația Firebase
const app = initializeApp(firebaseConfig);

// Inițializează Firebase Auth cu persistență în AsyncStorage
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)  // Utilizează corect AsyncStorage
});

export { app, auth };