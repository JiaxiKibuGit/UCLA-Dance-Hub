import React from 'react'

import { GetSearchTeam, GetSearchList } from './components/dbHelper';
import Navbar from './components/navbar'
import './search.css'



class DanceSearch extends React.Component {

    constructor() {
        super();
        this.state = {
          teamMembers: null,
          idMap: null, // Initialize as null, we will set it in componentDidMount
          searchResults: undefined,
        };
    }
    
    async componentDidMount() { // SETS MAP, SETS SEARCHLIST
        const temp = await GetSearchList();
        const idMap = await temp;
        await this.setState({ idMap }); // sets idMap

        let returnlist = ["Return to Homepage"];
        for(let i = 0; i<Object.keys(temp).length; i++) { // changes the map into a list of searchable terms 
            returnlist.push(temp[i]["name"]);
        }
        const teamMembers = await returnlist;
        await this.setState({teamMembers})

        const searchResults = await teamMembers.slice(0, 6);
        this.setState({searchResults});
    }


    filter(q) {
        const query = q.target.value.toLowerCase();
        const searchResults = this.state.teamMembers
          .filter(member => member.toLowerCase().includes(query)) // queries the list
          .slice(0, 10);
        this.setState({ searchResults });
    }

    redirectToPage(name) {
        let team = this.state.idMap;
        if(name == "Return to Homepage") {
            window.location.replace("/");
        }
        else {
            for(let i = 0; i<Object.keys(team).length; i++) {
                if(team[i]["name"] == name) {
                    window.sessionStorage.setItem("current_team", team[i]["team"]); // searches idMap for a match to the selection and sets that to team
                }
            }
            window.location.replace("/team"); // go to team page
        }
    }


    render() {
        return (
            <div className="center">
            <Navbar />
            <br />
            <br />
            <br />
            <h1>Team/Member Search</h1>
            <input
                
                onChange={this.filter.bind(this)}
                placeholder="Search Teams/Members"
            />

            {this.state.searchResults && (
                <div>
                    <ul>
                        {this.state.searchResults.map((value) => (
                         <li onClick = {() => this.redirectToPage(value)}>{value}</li>
                        ))}
                    </ul>
                </div>
            )}
            </div>
        );
    }
}





      

export default DanceSearch;