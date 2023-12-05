import React, { useEffect, useState } from "react";
import NavBar from "./components/navbar.js";
import { useGetEmail, useGetName, useGetPFP } from "./components/dbHelper.js";
import { getAuth, signOut } from "firebase/auth";

export default function Profile(props) {
  const [name, setName] = useState(null);
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
    <div style={{ textAlign: "center" }}>
      <NavBar />
      <br />
      <br />
      <br />
      <p style={{ fontSize: "3rem", fontWeight: "bold" }}>Profile</p>
      <div
        style={{
          background: "#ddd",
          padding: "20px",
          borderRadius: "8px",
          display: "inline-block",
        }}
      >
        <img
          src={useGetPFP()}
          alt="Profile"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "100%",
          }}
        />
        <p style={{ fontSize: "1.5rem" }}>Name: {useGetName()}</p>
        <p style={{ fontSize: "1.5rem" }}>Gmail: {useGetEmail()}</p>
        <button
          onClick={handleSignOut}
          style={{ fontSize: "1.5rem", marginRight: "10px" }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
