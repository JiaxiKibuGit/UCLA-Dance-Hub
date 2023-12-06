import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./homepage.css";
import { GetEventList, CheckIfAuth } from "./components/dbHelper";

export default class MyEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventData: [],
    };
  }

  async componentDidMount() {
    await CheckIfAuth();

    // SETS MAP, SORTS SEARCHLIST
    const temp = await GetEventList();
    let sorted_list = temp.sort((a, b) => a.unix - b.unix); // sort list by time, earliest to latest

    const currentTime = Math.floor(Date.now() / 1000); // Current Unix time in seconds
    const filteredList = sorted_list.filter(
      (event) => event.unix >= currentTime
    ); // filter for only events after current event

    this.setState({ eventData: filteredList });
    console.log(sorted_list);
  }


  render() {
    const headerStyle = {
        textAlign: 'center',
        padding: '10px',
    };
    return (

        
      <div>
        <NavBar />
        <br />
        <br />
        <br />
        <br></br>
        <h1 style = {headerStyle}>My Events - Hosted by My Followed Organizations</h1>
       
        <div className="eventListBox">
        {this.state.eventData.map((event, index) => (
            <div className="eventListOuterDiv">
            <p className="eventHeader">{event.name}</p>
            <p className="eventSubtitle">
                {event.location} | {event.date} at {event.time}
            </p>
            <p className="eventSubtitle">{event.org}</p>
            <p className="descriptionSub">"{event.description}"</p>
            </div>
        ))}
        </div>
        
         
            
      </div>
    );
  }
}
