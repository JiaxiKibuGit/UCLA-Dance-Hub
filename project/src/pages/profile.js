import React, {useEffect, useState} from 'react';

import NavBar from './components/navbar.js';
import {useGetName} from './components/dbHelper.js'


export default function Profile(props) {



    return (
      <div>
        <NavBar/>
        <br></br>
        <br></br>
        <br></br>
        <p>Profile</p>
        <p>Name: {GetName()}</p>
      </div>
    );
  }
  