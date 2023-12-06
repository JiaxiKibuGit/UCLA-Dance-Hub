import React, { useState, useEffect } from 'react';
import NavBar from './components/navbar';
import './map.css';
import { GetEventList } from './components/dbHelper';

export default function Map() {
  console.log("don");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventList = await GetEventList();
      eventList.sort((a, b) => a.unix - b.unix); // Sort by upcoming date
      setEvents(eventList);
    };

    fetchEvents();
  }, []);

  function mapLocationToMarkerId(location) {
    const mapping = {
      "Lot DD": 1,
      "Lot 8 P2": 2,
      "Pauley Pavillion (LATC)": 3,
      "Lot 7 P1": 4,
      "Wooden": 5,
      "Bruin Plaza": 6,
      "Lot 4 P1": 7,
      "Lot 4 P2": 7
    };
    return mapping[location] || null; // Return the corresponding marker ID or null if no match
  }

  const markers = [
    { id: 1, top: '27%', left: '21%'},
    { id: 2, top: '70%', left: '30%' },
    { id: 3, top: '38.5%', left: '37.4%' },
    { id: 4, top: '34.5%', left: '53.5%' },
    { id: 5, top: '37%', left: '65.8%' },
    { id: 6, top: '48.5%', left: '72.1%' },
    { id: 7, top: '28%', left: '76.4%' },

  ];

  const getEventForMarker = (markerId) => {
    const today = Math.floor(Date.now() / 1000);
  
    const eventForMarker = events.find(event => {
      const eventMarkerId = mapLocationToMarkerId(event.location);
      return eventMarkerId === markerId && event.unix >= today;
    });
  
    return eventForMarker;
  }  
  

  return (
    <div className="content-container">
      <NavBar />
      <br />
      <br />
      <div className="centered-container">
        <div className="map-container">
          <img
            src="map.png"
            alt="UCLA Map"
            className="responsive-map"
          />
          {markers.map(marker => {
            const event = getEventForMarker(marker.id);
            return event ? (
              <div
                key={marker.id}
                className="tear"
                style={{ top: marker.top, left: marker.left }}
              >
                <div className="popup">
                  <img src={event.imageUrl} alt="Marker Image" className="popup-image" />
                  <p>{event.name} - {event.startDate}</p>
                </div>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}
