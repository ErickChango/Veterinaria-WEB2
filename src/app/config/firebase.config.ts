import { initializeApp } from "firebase/app";

export const firebaseConfig = {
    apiKey: "AIzaSyBhkAPNn7S-rweFCpGJ_r7n9p1y6d-0S9E",
    authDomain: "app-crud-68fd3.firebaseapp.com",
    databaseURL: "https://app-crud-68fd3-default-rtdb.firebaseio.com",
    projectId: "app-crud-68fd3",
    storageBucket: "app-crud-68fd3.firebasestorage.app",
    messagingSenderId: "1022812018768",
    appId: "1:1022812018768:web:c40ebc3b72926910de5955"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);