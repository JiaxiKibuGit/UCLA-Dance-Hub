import React from 'react';
import NavBar from './components/navbar';
import {GetTeamInfo} from './components/dbHelper.js'


// TEAM_ID CONSTS
const ACA = 2;


// DATABASE READ CONSTS
const TEAM_NAME = 1;
const ABOUT_US = 2;
const PHOTO = 3;
const MEMBERLIST = 4;
const VIDEO = 5;

const TeamPage = (props) => {
  
   var team_id = ACA; // 1 = SAMAHANG, 2 = ACA, 3 = VSU, 4 = Foundations, 5 = KBM
   const marginTopValue = '60px';


   return (
       <div>
           <NavBar />
           <div style={{ width: '100%', height: '500px', overflow: 'hidden', marginTop: marginTopValue }}>
               <img src={GetTeamInfo(team_id, PHOTO)} alt="Samahang Team Photo" style={{ width: '50%', height: '100%', objectFit: 'fill' }} />
           </div>
           <div style={{ marginTop: '20px' }}>
               <h1>{GetTeamInfo(team_id, TEAM_NAME)}</h1>
               <h2>About Us</h2>
               <p>
                   {GetTeamInfo(team_id, ABOUT_US)}
               </p>
               <h2>Sample Performance</h2>
               <iframe width="560" height="315" src={GetTeamInfo(team_id, VIDEO)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           </div>
          
          


           {/* Additional sections for Samahang team page */}
           {/* ... */}




       </div>
   );
};


export default TeamPage;



