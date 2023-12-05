import React from 'react';
import NavBar from './components/navbar';
import { GetTeamInfo } from './components/dbHelper.js';
import './teampage.css'; // Import the external CSS file

const SAMAHANG = 1;
const ACA = 2;
const VSU = 3;
const FOUNDATIONS = 4;
const KBM = 5;

const TEAM_NAME = 1;
const ABOUT_US = 2;
const PHOTO = 3;
const VIDEO = 4;

const TeamPage = (props) => {
    var team_id = SAMAHANG;
    team_id = window.sessionStorage.getItem("current_team");
    const marginTopValue = '60px';

    return (
        <div className="team-page-container">
            <NavBar />

            <div className="team-photo-container">
                <img
                    src={GetTeamInfo(team_id, PHOTO)}
                    alt="Samahang Team Photo"
                    className="team-photo"
                />
            </div>

            <div className="team-info-container">
                <h1 className="team-name">{GetTeamInfo(team_id, TEAM_NAME)}</h1>
                <h2>About Us</h2>
                <p className="about-us">
                    {GetTeamInfo(team_id, ABOUT_US)}
                </p>

                <h2>Sample Performance</h2>
                <div className="video-container">
                    <iframe
                        src={GetTeamInfo(team_id, VIDEO)}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>

                <h2>Member List</h2>
            

            </div>

            {/* Additional sections for Samahang team page */}
            {/* ... */}
        </div>
    );
};

export default TeamPage;
