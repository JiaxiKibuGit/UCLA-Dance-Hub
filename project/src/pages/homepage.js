import React, { useState } from "react";
import NavBar from "./components/navbar";
import "./homepage.css";

export default function HomePage() {
  const [selectedContent, setSelectedContent] = useState({
    title: "Upcoming Schedule",
    content: "schedule",
  });

  const handleContentClick = (content) => {
    // Check if the clicked button is the same as the current active one
    if (content === selectedContent.content) {
      // Do nothing if the button is the same
      return;
    }

    // Set the selected content based on the clicked button
    setSelectedContent({
      title:
        content === "contact"
          ? "Contact Information"
          : content === "questions"
          ? "Commonly Asked Questions"
          : "Upcoming Schedule",
      content,
    });
  };

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
              onClick={() => handleContentClick("schedule")}
            >
              <h2>Upcoming Schedule</h2>
            </div>
            <div
              id="contact-info"
              onClick={() => handleContentClick("contact")}
            >
              <h2>Contact Information</h2>
            </div>
            <div
              id="common-questions"
              onClick={() => handleContentClick("questions")}
            >
              <h2>Commonly Asked Questions</h2>
            </div>
          </aside>
          <main className="main-section">
            <div
              className="info-box"
              onClick={() => handleContentClick("schedule")}
            >
              <h2>{selectedContent.title}</h2>
              {selectedContent.content === "schedule" && (
                <>
                  {Array.from({ length: 20 }).map((_, index) => (
                    <p key={index}>Test Data {index + 1}</p>
                  ))}
                </>
              )}
              {selectedContent.content === "contact" && (
                <>
                  {Array.from({ length: 20 }).map((_, index) => (
                    <p key={index}>Test Data {index + 1}</p>
                  ))}
                </>
              )}
              {selectedContent.content === "questions" && (
                <>
                  {Array.from({ length: 20 }).map((_, index) => (
                    <p key={index}>Test Data {index + 1}</p>
                  ))}
                </>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
