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

class TeamPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            team_id: SAMAHANG, // default value, can be updated based on sessionStorage or props
            name:"", 
            photo:"", 
            about_us:"", 
            video:"",
            member1:[],
            member2:[], 
            member3:[],
            member4:[],
        };
    }

    async componentDidMount() {
        const currentTeam = await window.sessionStorage.getItem("current_team");
        if (currentTeam) {
            this.setState({ team_id: currentTeam });
        }

        const tname = await GetTeamInfo(this.state.team_id, TEAM_NAME);
        const tphoto = await GetTeamInfo(this.state.team_id, PHOTO);
        const tabout = await GetTeamInfo(this.state.team_id, ABOUT_US);
        const tvideo = await GetTeamInfo(this.state.team_id, VIDEO);
        const tmembers = await GetTeamInfo(this.state.team_id, 5)

        this.setState({ name: tname[0] });
        this.setState({ photo: tphoto[0] });
        this.setState({ about_us: tabout[0] });
        this.setState({ video: tvideo[0] });

        let memberList = await Object.keys(tmembers[0]);
        var quarterSize = Math.floor(memberList.length / 4);
        var array1 = [], array2 = [], array3 = [], array4 = [];
        for (var i = 0; i < memberList.length; i++) {
            if (i < quarterSize) {
                array1.push(memberList[i]);
            } else if (i < 2 * quarterSize) {
                array2.push(memberList[i]);
            } else if (i < 3 * quarterSize) {
                array3.push(memberList[i]);
            } else {
                array4.push(memberList[i]);
            }
        }
        await this.setState({ member1: array1 });
        await this.setState({ member2: array2 });
        await this.setState({ member3: array3 });
        await this.setState({ member4: array4 });

    }

    render() {
        
        const marginTopValue = '60px';

        return (
            <div className="team-page-container">
                <NavBar />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="team-photo-container">
                    <img
                        src={this.state.photo}
                        alt="Team Photo"
                        className="team-photo"
                    />
                </div>

                <div className="team-info-container">
                    <h1 className="team-name">{this.state.name}</h1>
                    <h2>About Us</h2>
                    <p className="about-us">
                        {this.state.about_us}
                    </p>

                    <h2>Sample Performance</h2>
                    <div className="video-container">
                        <iframe
                            src={this.state.video}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <h2>Member List</h2>
                    <div className = "aa">
                        {this.state.member1.map((name, index) => (
                        <div className="bb">
                            <p>{name}</p>
                        </div>
                        ))}  
                        {this.state.member2.map((name, index) => (
                        <div className="bb">
                            <p>{name}</p>
                        </div>
                        ))}  
                        {this.state.member3.map((name, index) => (
                        <div className="bb">
                            <p>{name}</p>
                        </div>
                        ))}  
                        {this.state.member4.map((name, index) => (
                        <div className="bb">
                            <p>{name}</p>
                        </div>
                        ))}                                                                          
                    </div>
  

                    </div>

                {/* Additional sections for team page */}
                {/* ... */}
            </div>
        );
    }
}

export default TeamPage;