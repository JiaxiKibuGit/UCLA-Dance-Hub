import './App.css';
import React from 'react'

import Homepage from './pages/homepage.js';
import Infopage from './pages/infopage.js';
import NotFound from './pages/notfound.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/infopage" element={<Infopage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
  );
}// make buttons to link /xyz to access other pages easily 
     


export default App;
