import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./homepage.css";
import { GetEventList, CheckIfAuth, GetFollowing } from "./components/dbHelper";
import { filter } from "@chakra-ui/react";

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

    const flw = await GetFollowing();
    const myorgs = []
    for(const i in flw[0]) {
      if(flw[0][i]) {
        await myorgs.push(i); // populate myorgs
      }
    }

    const finallist = [];
    let convertedname = "";
    for(const i in myorgs) { // add all events with event.org = followed org essentially 
      switch(myorgs[i]) {
        case "one":
          convertedname = "Samahang Modern";
          break;
        case "two":
          convertedname = "ACA All Day"
          break;
        case "three":
          convertedname = "VSU Modern"
          break;
        case "four":
          convertedname = "Foundations Choreography"
          break;          
        case "five":
          convertedname = "KBM Dance";
          break;          
        default:
          console.log("all untrue");
          break;
      }
      const temp = sorted_list.filter(
        (event) => event.org == convertedname
      );
      for(const j in temp) {
        finallist.push(temp[j])
      }
    }


    this.setState({ eventData: finallist });
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
