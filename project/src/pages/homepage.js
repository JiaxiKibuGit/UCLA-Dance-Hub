import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./homepage.css";
import { GetEventList } from "./components/dbHelper";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedContent: {
        title: "Upcoming Schedule",
        content: "schedule",
      },
      eventData: [],
    };
  }

  async componentDidMount() { // SETS MAP, SETS SEARCHLIST
      const temp = await GetEventList();
      this.setState({ eventData : temp }); 
      console.log(temp);
  }

  handleContentClick = (content) => {
    let title = "";
    if (content === "contact") {
      title = "Contact Information";
    } else if (content === "questions") {
      title = "Commonly Asked Questions";
    } else {
      title = "Upcoming Schedule";
    }

    this.setState({
      selectedContent: {
        title: title,
        content: content,
      },
    });
  };

  render() {
    const { selectedContent } = this.state;

    return (
      <div>
        <NavBar />
        <br />
        <br />
        <br />
        <div className="content">
          <header className="header">
            <img src="/gobruins.avif" alt="Banner" className="banner-image" />
          </header>
          <div className="main-content">
            <aside className="side-bar">
              <div
                id="contact-info"
                onClick={() => this.handleContentClick("schedule")}
              >
                <h2>Upcoming Schedule</h2>
              </div>
              <div
                id="contact-info"
                onClick={() => this.handleContentClick("contact")}
              >
                <h2>Contact Information</h2>
              </div>
              <div
                id="common-questions"
                onClick={() => this.handleContentClick("questions")}
              >
                <h2>Commonly Asked Questions</h2>
              </div>
            </aside>
            <main className="main-section">
              <div className="info-box">
                <h2>{selectedContent.title}</h2>
                {selectedContent.content === "schedule" && (
                  <div>
                    {this.state.eventData.map((event, index) => (
                        <p key={index}>{event.name} - {event.location}</p>
                    ))}
                  </div>
                )}
                {selectedContent.content === "contact" && (
                  <>
                    <h2
                      style={{
                        textAlign: "left",
                        fontSize: "32px",
                      }}
                    >
                      ACA
                    </h2>
                    <h2 style={{ textAlign: "left", fontSize: "20px" }}>
                      <a
                        href="https://linktr.ee/acaallday"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Linktree
                      </a>
                    </h2>
                    <h2 style={{ textAlign: "left", fontSize: "20px" }}>
                      <a
                        href="https://www.instagram.com/acaallday/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram
                      </a>
                    </h2>
                    <h2 style={{ textAlign: "left", fontSize: "20px" }}>
                      <a
                        href="https://www.youtube.com/@acaallday"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        YouTube
                      </a>
                    </h2>
                    <h2 style={{ textAlign: "left", fontSize: "20px" }}>
                      <a
                        href="https://www.facebook.com/acahiphop"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                      </a>
                    </h2>
                    <h2 style={{ textAlign: "left", fontSize: "32px" }}>VSU</h2>
                    <h2 style={{ textAlign: "left", fontSize: "20px" }}>
                      <a
                        href="https://linktr.ee/vsumodern"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Linktree
                      </a>
                    </h2>
                    <h2 style={{ textAlign: "left", fontSize: "20px" }}>
                      <a
                        href="https://www.instagram.com/vsumodern/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram
                      </a>
                    </h2>
                    <h2 style={{ textAlign: "left", fontSize: "20px" }}>
                      <a
                        href="https://www.youtube.com/user/vsumodern/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        YouTube
                      </a>
                    </h2>
                    <h2 style={{ textAlign: "left", fontSize: "20px" }}>
                      <a
                        href="https://www.facebook.com/vsumodern"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                      </a>
                    </h2>
  
                    <h2 style={{ textAlign: "left", fontSize: "32px" }}>
                      Samahang
                    </h2>
                    <h2 style={{ textAlign: "left", fontSize: "20px" }}>
                      <a
                        href="https://linktr.ee/samahangmodern"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Linktree
                      </a>
                    </h2>
                    <h2 style={{ textAlign: "left", fontSize: "20px" }}>
                      <a
                        href="https://instagram.com/samahangmodern"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram
                      </a>
                    </h2>
                    <h2 style={{ textAlign: "left", fontSize: "20px" }}>
                      <a
                        href="https://www.youtube.com/channel/UCz3HuH4ffn5PRFrEFQMloMw"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        YouTube
                      </a>
                    </h2>
                    <h2 style={{ textAlign: "left", fontSize: "32px" }}>
                      Foundations
                    </h2>
                    <h2 style={{ textAlign: "left", fontSize: "20px" }}>
                      <a
                        href="https://www.instagram.com/foundationschoreo/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram
                      </a>
                    </h2>
                    <h2 style={{ textAlign: "left", fontSize: "20px" }}>
                      <a
                        href="https://www.youtube.com/c/FoundationsChoreography/featured"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        YouTube
                      </a>
                    </h2>
                    <h2 style={{ textAlign: "left", fontSize: "20px" }}>
                      <a
                        href="https://www.facebook.com/FoundationsChoreo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                      </a>
                    </h2>
                    <h2 style={{ textAlign: "left", fontSize: "32px" }}>KBM</h2>
                    <h2 style={{ textAlign: "left", fontSize: "20px" }}>
                      <a
                        href="https://www.instagram.com/kbmdanceucla/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram
                      </a>
                    </h2>
                    <h2 style={{ textAlign: "left", fontSize: "20px" }}>
                      <a
                        href="https://www.youtube.com/c/KBMDanceUCLA"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        YouTube
                      </a>
                    </h2>
                  </>
                )}
                {selectedContent.content === "questions" && (
                  <>
                    <h2 style={{ textAlign: "left", fontSize: "32px" }}>
                      How Do I Find Out About Future Performances And Events?
                    </h2>
                    <h2
                      style={{
                        textAlign: "left",
                        fontSize: "20px",
                        fontWeight: "normal",
                      }}
                    >
                      You can either navigate to the upcoming schedule tab where
                      we have all the future events and performances or you can go
                      to the map tab where we have a map of the school with where
                      and when events will happen.
                    </h2>
                    <h2 style={{ textAlign: "left", fontSize: "32px" }}>
                      What Is An Admin?{" "}
                    </h2>
                    <h2
                      style={{
                        textAlign: "left",
                        fontSize: "20px",
                        fontWeight: "normal",
                      }}
                    >
                      Admin accounts have the ability to add and remove events.
                      They also have the ability to edit their organization page.
                      You can tell you are an admin if you go to the profile page
                      and there is a star next to your name.
                    </h2>
                    <h2 style={{ textAlign: "left", fontSize: "32px" }}>
                      How Do I Become An Admin?{" "}
                    </h2>
                    <h2
                      style={{
                        textAlign: "left",
                        fontSize: "20px",
                        fontWeight: "normal",
                      }}
                    >
                      Contact us at UCLADanceTeamWeb@gmail.com and provide proof
                      of leadership within one of the available teams and we will
                      get back to you quickly!
                    </h2>
                    <h2 style={{ textAlign: "left", fontSize: "32px" }}>
                      How Does The Search Bar Work?
                    </h2>
                    <h2
                      style={{
                        textAlign: "left",
                        fontSize: "20px",
                        fontWeight: "normal",
                      }}
                    >
                      You can search for either an organization or a team member
                      through the search bar and it will bring you to the
                      corresponding organization they are a part of. You can also
                      search for an individual event through the name or the
                      organization and clicking on it will bring you to a page
                      describing the event.
                    </h2>
                    <h2 style={{ textAlign: "left", fontSize: "32px" }}>
                      How Does The Search Bar Work?
                    </h2>
                    <h2
                      style={{
                        textAlign: "left",
                        fontSize: "20px",
                        fontWeight: "normal",
                      }}
                    >
                      You can search for either an organization or a team member
                      through the search bar and it will bring you to the
                      corresponding organization they are a part of. You can also
                      search for an individual event through the name or the
                      organization and clicking on it will bring you to a page
                      describing the event.
                    </h2>
                    <h2 style={{ textAlign: "left", fontSize: "32px" }}>
                      How Does The Map Work?
                    </h2>
                    <h2
                      style={{
                        textAlign: "left",
                        fontSize: "20px",
                        fontWeight: "normal",
                      }}
                    >
                      If you hover over the different locations available on our
                      map you should see the events upcoming at each location as
                      well as details about the team, time, and event name.
                    </h2>
                    <h2 style={{ textAlign: "left", fontSize: "32px" }}>
                      How Do I See All The Members Of A Team?
                    </h2>
                    <h2
                      style={{
                        textAlign: "left",
                        fontSize: "20px",
                        fontWeight: "normal",
                      }}
                    >
                      If you go to the organizations site all the members of a
                      team should be listed under their organization.
                    </h2>
                  </>
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}









