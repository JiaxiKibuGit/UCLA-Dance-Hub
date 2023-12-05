import React from 'react'

import { GetSearchTeam } from './components/dbHelper';
import Navbar from './components/navbar'
import './search.css'

class DanceSearch extends React.Component {
    constructor() {
      super();
      this.state = {
        teamMembers: ["team1", "team2", "team3"],
        searchResults: undefined,
      }
    }

    filter(q) {
        const query = q.target.value.toLowerCase();
        const searchResults = this.state.teamMembers
          .filter(member => member.toLowerCase().includes(query))
          .slice(0, 10);
        this.setState({ searchResults });
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
                        <Navigator value={value} />
                        ))}
                    </ul>
                </div>
            )}
            </div>
        );
    }
}

function redirectToPage(team) {
    window.sessionStorage.setItem("current_team", team);
    window.location.replace("/team");
  }



function Navigator(props) {
    return (
        <li onClick = {() => redirectToPage(GetSearchTeam(props.value))}>{props.value}</li>
    );
}
      

export default DanceSearch;