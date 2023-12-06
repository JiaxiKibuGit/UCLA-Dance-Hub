import React from 'react';
import NavBar from "./components/navbar.js";
import { useGetEmail, useGetName, useGetPFP } from "./components/dbHelper.js";
import { getAuth, signOut } from "firebase/auth";
import './profile.css'; // Assuming the CSS is in this file

export default function Profile(props) {
  const auth = getAuth(); // Assuming Firebase is initialized globally

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
      <div className="user-dashboard">
        <NavBar />

        <main>
          <section className="user-info">
            <h2>User Profile</h2>
            <img
              src={useGetPFP()} // Assuming this function provides the URL of the profile picture
              alt="Profile"
              style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "100%" }}
            />
            <p><strong>Name:</strong> {useGetName()}</p>
            <p><strong>Email:</strong> {useGetEmail()}</p>
            <p><strong>Organizations Followed:</strong> 0</p>
          </section>

          <section className="enrolled-events">
            <h2>Events Followed:</h2>
            <ul id="event-list">
              {/* The list of enrolled events will be dynamically generated */}
            </ul>

            {/* Display a note if there are no enrolled events */}
            <p id="no-enrolled-events-note" style={{ display: 'none' }}><strong>None</strong></p>
          </section>

          {/* Sign Out Button */}
          <button
            onClick={handleSignOut}
            className="event-hub-button"
          >
            Sign Out
          </button>
        </main>
      </div>
    </div>
  );
}
