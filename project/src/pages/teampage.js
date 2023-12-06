import React from 'react';
import NavBar from './components/navbar';
import { GetTeamInfo } from './components/dbHelper.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, update, get } from 'firebase/database';
import './teampage.css';

const TEAM_NAME = 1;
const ABOUT_US = 2;
const PHOTO = 3;
const VIDEO = 4;

class TeamPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            team_id: 1, // default value, can be updated based on sessionStorage or props
            name: "",
            photo: "",
            about_us: "",
            video: "",
            member1: [],
            member2: [],
            member3: [],
            member4: [],
            isFollowing: false,
            user: null,
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

        this.setState({ name: tname[0], photo: tphoto[0], about_us: tabout[0], video: tvideo[0] });

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
        this.setState({ member1: array1, member2: array2, member3: array3, member4: array4 });

        // Check if the user is already following the team
        const auth = getAuth();
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                this.setState({ user: currentUser });
                const db = getDatabase();
                const userRef = ref(db, `users/${currentUser.uid}/orgs followed`);
                get(userRef).then((snapshot) => {
                    if (snapshot.exists() && snapshot.val()[this.state.team_id]) {
                        this.setState({ isFollowing: true });
                    }
                });
            }
        });
    }

    handleFollowButtonClick = () => {
        const { user, team_id, isFollowing } = this.state;
        if (user) {
            const db = getDatabase();
            const userRef = ref(db, `users/${user.uid}/orgs followed`);
            get(userRef).then((snapshot) => {
                let orgsFollowedUpdate = {};
                // Check if 'orgs followed' exists and update the specific team follow status
                if (snapshot.exists()) {
                    orgsFollowedUpdate[team_id] = !isFollowing;
                } else {
                    // If 'orgs followed' doesn't exist, create it with the specific team follow status
                    orgsFollowedUpdate = { [team_id]: !isFollowing };
                }
                update(userRef, orgsFollowedUpdate);
                this.setState({ isFollowing: !isFollowing });
            });
        } else {
            console.log("User not logged in");
        }
    }

    render() {
        const followButtonText = this.state.isFollowing ? 'Unfollow' : 'Follow';

        return (
            <div className="team-page-container">
                <NavBar />
                <div className="team-photo-container">
                    <img src={this.state.photo} alt="Team Photo" className="team-photo" />
                </div>
                <div className="team-info-container">
                    <h1 className="team-name">
                        {this.state.name}
                        <button className="follow-button" onClick={this.handleFollowButtonClick}>
                            {followButtonText}
                        </button>
                    </h1>
                    <h2>About Us</h2>
                    <p className="about-us">{this.state.about_us}</p>
                    <h2>Sample Performance</h2>
                    <div className="video-container">
                        <iframe src={this.state.video} title="YouTube video player" allowFullScreen></iframe>
                    </div>
                    <h2>Member List</h2>
                    <div className="aa">
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
            </div>
        );
    }
}

export default TeamPage;



