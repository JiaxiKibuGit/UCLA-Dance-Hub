import './App.css';
import React from 'react'

import HomePage from './pages/homepage.js';
import Map from './pages/map.js';
import OrganizationSearch from './pages/organizationsearch.js';
import NotFound from './pages/notfound.js';
import Profile from './pages/profile.js';
import TeamPage from './pages/teampage.js';
import HostEvent from './pages/hostevent.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/organizations" element={<OrganizationSearch />} />
        <Route exact path="/map" element={<Map />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/team" element={<TeamPage />} /> {/* New route for team pages */}
        <Route exact path="/hostevent" element={<HostEvent />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App; 
