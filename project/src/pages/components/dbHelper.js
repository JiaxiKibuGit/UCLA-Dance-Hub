import React, {useState, useEffect} from 'react';
import {initializeApp} from 'firebase/app';
import {getDatabase, ref, get} from 'firebase/database';
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';


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
const db = getDatabase();



/* AUTHORIZATON HANDLERS */


//Google Auth
export async function signIn() {
    const googleProvider = await new GoogleAuthProvider();
    const res = await signInWithPopup(auth, googleProvider);
    window.location.replace("/profile");
};


//go to signin if not logged in, go to profile
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
export function useGetName() {
    const [currentName, setCurrentName] = useState("");

    useEffect(() => {
        const x = auth.onAuthStateChanged(user => {
            if (user) {
                setCurrentName(user.displayName);
            } else {
                setCurrentName("Sign In");
            }
        });
        return () => x();
    }, []);

    return currentName;
}




/* TEAM DATABASE READ FUNCTIONS */

//1=NAME, 2=DESCRIPTION, 3=PHOTO, 4=MEMBER LIST
export function GetTeamInfo(teamid, choice) {
    const [temp, setTemp] = useState("Loading");
    const dbRef = ref(db, '/teams/' + teamid);

    get(dbRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                var teamName;
                switch(choice) {
                    case 1:
                        teamName = snapshot.val().team_name;
                        break;
                    case 2:
                        teamName = snapshot.val().about_me;
                        break;
                    case 3:
                        teamName = snapshot.val().key_image;      
                        break;
                    case 4:
                        teamName = snapshot.val().team_name;
                        break;
                    default:
                        teamName = "error"
                }
                //console.log(teamName);
                setTemp(teamName);
            } else {
                console.log('Team not found.');
                setTemp("Team not found");
            }
        })
    return temp;
}



export function GetSearchTeam() {
    return 1;
}


