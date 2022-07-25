import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBaYb_ccBHuVHJix-NiaD4btl19uLuj4To",
    authDomain: "marocartisandotcom.firebaseapp.com",
    projectId: "marocartisandotcom",
    storageBucket: "marocartisandotcom.appspot.com",
    messagingSenderId: "208304525013",
    appId: "1:208304525013:web:0bc5e465258e823d601c5c",
    measurementId: "G-73Z8MY3M2C"
};

const app = initializeApp(firebaseConfig);


export const storage = getStorage(app);
