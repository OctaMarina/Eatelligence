import { initializeApp } from "firebase/app";
// @ts-ignore
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyAQxN2Djlz7poUJXwgtnPdnzPJ-rzV7WUo",
    authDomain: "unplugged-e9593.firebaseapp.com",
    projectId: "unplugged-e9593",
    storageBucket: "unplugged-e9593.appspot.com",
    messagingSenderId: "107258759325",
    appId: "1:107258759325:web:baf8cb7d3c83019b2cec74",
    measurementId: "G-WS61E5VRXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { app, auth };