import './App.css';
import React from 'react'

import HomePage from './pages/homepage.js';
import Map from './pages/map.js';
import OrganizationSearch from './pages/organizationsearch.js';
import NotFound from './pages/notfound.js';
import Profile from './pages/profile.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/organizations" element={<OrganizationSearch/>}/>
          <Route exact path="/map" element={<Map/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
  );
}// make buttons to link /xyz to access other pages easily 
     


export default App; 
