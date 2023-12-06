import React, { useState, useEffect } from 'react';
import NavBar from "./components/navbar.js";
import { useGetEmail, useGetName, useGetPFP, GetTeamInfo } from "./components/dbHelper.js";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, get } from 'firebase/database';
import './profile.css';

function useFollowedOrgs(userId) {
  const [followedOrgs, setFollowedOrgs] = useState([]);
  const [updateTrigger, setUpdateTrigger] = useState(false); // Trigger to re-fetch data

  useEffect(() => {
    const fetchFollowedOrgs = async () => {
      if (userId) {
        const db = getDatabase();
        const userRef = ref(db, `users/${userId}/orgs followed`);
        const teamsRef = ref(db, 'teams');
        const orgsSnapshot = await get(userRef);
        const teamsSnapshot = await get(teamsRef);

        if (orgsSnapshot.exists() && teamsSnapshot.exists()) {
          const orgsData = orgsSnapshot.val();
          const teamsData = teamsSnapshot.val();
          const followedTeams = [];

          for (let i = 1; i <= Object.keys(orgsData).length; i++) {
            if (orgsData[i]) {
              const teamInfo = await GetTeamInfo(i, 1); // 1 for team name
              followedTeams.push(teamInfo[0]);
            }
          }

          setFollowedOrgs(followedTeams);
        }
      }
    };

    fetchFollowedOrgs();
  }, [userId, updateTrigger]); // Re-fetch when userId or updateTrigger changes

  return [followedOrgs, setUpdateTrigger];
}

export default function Profile() {
  const auth = getAuth();
  const userEmail = useGetEmail();
  const userName = useGetName();
  const userPFP = useGetPFP();
  const [followedOrgs] = useFollowedOrgs(auth.currentUser?.uid);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      window.location.replace("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="PF">
      <NavBar />
      <main className="user-dashboard">
        <section className="user-info">
          <h2>User Profile</h2>
          <img
            src={userPFP}
            alt="Profile"
            style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "100%" }}
          />
          <p><strong>Name:</strong> {userName}</p>
          <p><strong>Email:</strong> {userEmail}</p>
          <p><strong>Organizations Followed:</strong> {followedOrgs.join(', ') || 'None'}</p>
          <button className="followed-events-button">All Followed Events</button>
        </section>

        <button onClick={handleSignOut} className="event-hub-button">Sign Out</button>
      </main>
    </div>
  );
}
