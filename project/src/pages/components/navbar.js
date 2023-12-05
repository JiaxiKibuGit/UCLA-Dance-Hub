
import React, {useState, useEffect} from 'react';
import './navbar.css';
import {useGetName, PLHandler} from './dbHelper.js';


const Navbar = () => {
  const currentName = useGetName();

  return (
    <div className="navbar" style={{zIndex:"100"}}>
      <button onClick={() => window.location.replace("/")}>Home</button>
      <button className = "left" onClick={() => window.location.replace("/organizations")}>Organizations</button>
      <button onClick={() => window.location.replace("/Map")}>Map</button>
      <button className = "login"  onClick = {() => PLHandler()}>{currentName}</button>
    </div>
  )

}



export default Navbar;