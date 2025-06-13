// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCuIEosjYbaDWmJAfjjbMmit5ZUsekz5Fk',
  authDomain: 'expo-auth-dfa69.firebaseapp.com',
  projectId: 'expo-auth-dfa69',
  storageBucket: 'expo-auth-dfa69.firebasestorage.app',
  messagingSenderId: '35729218091',
  appId: '1:35729218091:web:f0a21d408c77d75519a86e',
  measurementId: 'G-XH3KYZREH7',
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
