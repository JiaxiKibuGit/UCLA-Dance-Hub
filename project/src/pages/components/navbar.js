import React, { useState, useEffect } from 'react';
import './navbar.css';
import { GetName, PLHandler } from './dbHelper.js';
import { NameContext } from '../profile.js';

const Navbar = (props) => {
  return (
    <div className="navbar" style={{ zIndex: "100" }}>
      <button onClick={() => window.location.replace("/")}>Home</button>
      <button className="left" onClick={() => window.location.replace("/organizations")}>Organizations</button>
      <button onClick={() => window.location.replace("/Map")}>Map</button>
      <button onClick={() => window.location.replace("/hostevent")}>Host an Event</button> {/* Added tab for hosting an event */}
      <button className="login" onClick={() => PLHandler()}>{GetName()}</button>
    </div>
  );
}

export default Navbar;
