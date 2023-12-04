import React from 'react';
import NavBar from './components/navbar';
import {GetTeamInfo} from './components/dbHelper.js'


const TeamPage = (props) => {
    
    var team_id = 2; // 1 = SAMAHANG, 2 = ACA 
    const marginTopValue = '60px'; 

    return (
        <div>
            <NavBar />
            <div style={{ width: '100%', height: '500px', overflow: 'hidden', marginTop: marginTopValue }}>
                <img src={GetTeamInfo(team_id, 3)} alt="Samahang Team Photo" style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
            </div>
            <div style={{ marginTop: '20px' }}>
                <h1>{GetTeamInfo(team_id, 1)}</h1>
                <h2>About Us</h2>
                <p>
                    {GetTeamInfo(team_id, 2)}
                </p>
            </div>


            {/* Additional sections for Samahang team page */}
            {/* ... */}


        </div>
    );
};

export default TeamPage;
