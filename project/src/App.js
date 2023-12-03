import './App.css';
import React from 'react'

import HomePage from './pages/homepage.js';
import Map from './pages/map.js';
import OrganizationSearch from './pages/organizationsearch.js';
import NotFound from './pages/notfound.js';
import Profile from './pages/profile.js';
import ACAteampage from './pages/ACAteampage.js'; 
import Samahangteampage from './pages/Samahangteampage.js';
import Foundationspage from './pages/Foundationspage.js';
import VSUteampage from './pages/VSUteampage.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/organizations" element={<OrganizationSearch />} />
        <Route exact path="/map" element={<Map />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/aca" element={<ACAteampage />} /> {/* New route for ACA team page */}
        <Route exact path="/samahang" element={<Samahangteampage />} /> {/* New route for Samahang team page */}
        <Route exact path="/Foundations" element={<Foundationspage />} /> {/* New route for Foundations team page */}
        <Route exact path="/VSU" element={<VSUteampage />} /> {/* New route for VSU team page */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App; 
