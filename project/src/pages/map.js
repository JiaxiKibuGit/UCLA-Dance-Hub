import React from 'react';
import NavBar from './components/navbar';
import './map.css';

export default function Map() {
  const markers = [
    { id: 1, top: '27%', left: '21%' },
    { id: 2, top: '34.5%', left: '53.5%' },
    { id: 3, top: '38.5%', left: '37.4%' },
    { id: 4, top: '70%', left: '30%' },
    { id: 5, top: '28%', left: '76.4%' },
    { id: 6, top: '54%', left: '60%' }
  ];

  return (
    <div>
      <NavBar />
      <div className="map-container">
        <img
          src="map.png"
          alt="UCLA Map"
          className="responsive-map"
        />
        {markers.map(marker => (
          <div 
            key={marker.id} 
            className="tear" 
            style={{ top: marker.top, left: marker.left }}
          />
        ))}
      </div>
    </div>
  );
}
