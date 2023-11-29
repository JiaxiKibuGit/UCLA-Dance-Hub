import React, {useState} from 'react';
import {initializeApp, UserInfo} from 'firebase/app';
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';


//firebase config
export const firebaseConfig = {
    apiKey: "AIzaSyATM-7r3rmpU6WOOPSpy1XU-db0Cj-nAW4",
    authDomain: "ucladance-c16e6.firebaseapp.com",
    projectId: "ucladance-c16e6",
    storageBucket: "ucladance-c16e6.appspot.com",
    messagingSenderId: "23121829941",
    appId: "1:23121829941:web:a54c810e7e2c26763e517c",
    measurementId: "G-58SW1QF39G"
};
  
//initialize firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);





//Google Auth
export async function signIn() {
    const googleProvider = await new GoogleAuthProvider();
    const res = await signInWithPopup(auth, googleProvider);
    window.location.replace("/profile");
};


export function PLHandler() {
    auth.onAuthStateChanged((user) => {
        if (user) {
            window.location.replace("profile");
        } else {
            signIn();
        }
    });
}



//USER INFORMATON MODIFIER
export function GetName () {
    const [currentName, setCurrentName] = useState("Name");

    auth.onAuthStateChanged((user) => {
        if (user) {
            setCurrentName(user.displayName);
        } else {
            setCurrentName("Sign In");
        }
    });
    return currentName;
}














