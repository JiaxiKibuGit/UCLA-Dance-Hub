import React, {useState, useEffect} from 'react';
import {initializeApp} from 'firebase/app';
import {getDatabase, ref, get, set, push} from 'firebase/database';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';



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
            window.location.replace("/profile");
        } else {
            signIn();
        }
    });
}

//CHECK FOR AUTH TO USE HOSTING EVENT PAGE 
export function CheckIfAuth() {
    auth.onAuthStateChanged((user) => {
        if (user) {
        } else {
            window.location.replace("/NLI");
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

//1=NAME, 2=DESCRIPTION, 3=PHOTO
export function GetTeamInfo(teamid, choice) {
    const [teamInfo, setTeamInfo] = useState("Loading");

    useEffect(() => {
        const dbRef = ref(db, '/teams/' + teamid);

        get(dbRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    let teamName;
                    switch (choice) {
                        case 1:
                            teamName = snapshot.val().team_name;
                            break;
                        case 2:
                            teamName = snapshot.val().about_me;
                            break;
                        case 3:
                            teamName = snapshot.val().key_image;
                            break;
                        default:
                            teamName = "error";
                    }
                    setTeamInfo(teamName);
                } else {
                    console.log('Team not found.');
                    setTeamInfo("Team not found");
                }
            })
            .catch((error) => {
                console.error('Error fetching team data:', error);
                setTeamInfo("Error fetching team data");
            });
    }, [teamid, choice]);

    return teamInfo;
}



export async function GetSearchList() {
  const dbRef = ref(db, '/teams/');
  let team_and_members = [];

  try {
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      let teamData = snapshot.val();
      for (let i = 1; i < Object.keys(teamData).length + 1; i++) {
        const name = teamData[i]["team_name"];
        const team = i;
        team_and_members.unshift({name, team}); // add team:teamid

        let members = teamData[i]["memberlist"];
        for (const name in members) {
          const team = members[name];
          team_and_members.push({ name, team }); // add member:teamid
        }
      }

    } else {
      console.log('No data found at /teams/');
    }
  } catch (error) {
    console.error('Error fetching team data:', error);
  }
  console.log(team_and_members);
  return team_and_members;
}



export function createEvent(eventData) {
    const eventsRef = ref(db, 'events');
    return push(eventsRef, eventData)
        .then((response) => {
            console.log('Event created successfully.');
            return response; // Return the response which contains the reference to the new event
        })
        .catch((error) => {
            console.error('Error creating event: ', error);
            throw error; 
        });
}

export async function getEvent(eventId) {
    const db = getDatabase();
    const eventRef = ref(db, `events/${eventId}`);

    try {
        const snapshot = await get(eventRef);
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            console.log("Event not found");
            return null; // or throw an error as per your error handling strategy
        }
    } catch (error) {
        console.error('Error fetching event: ', error);
        throw error; // Re-throw the error for handling in the calling component
    }
}