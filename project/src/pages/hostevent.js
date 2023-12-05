import React from 'react';
import NavBar from './components/navbar'; // Assuming NavBar is your component
import { createEvent } from './components/dbHelper.js'; // Import the createEvent function from firebase.js
import './hostevent.css';


function HostEvent() {
    const organizations = ['Samahang Modern', 'ACA All Day', 'VSU Modern', 'Foundations Choreography', 'KBM'];
    const eventLocations = ['Lot 4 P1', 'Lot 4 P2', 'Lot 7 P1', 'Lot 8 P2', 'Lot DD', 'Pauley Pavillion (LATC)', 'Bruin Plaza', 'Wooden'];

    const handleSubmit = (e) => {
        e.preventDefault();

        const newEvent = {
            organization: document.getElementById('organization').value,
            name: document.getElementById('event-name').value,
            date: document.getElementById('event-date').value,
            time: document.getElementById('event-time').value,
            location: document.getElementById('event-location').value,
            description: document.getElementById('event-description').value
        };

        createEvent(newEvent); // Call the createEvent function with the new event data
    };

    return (
        <div>
            <NavBar />
            <main style={{ paddingTop: '4rem' }}>
                <section className="event-details">
                    <h2>Create an Event</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="organization">Organization:</label>
                        <select id="organization" required>
                            {organizations.map((org, index) => (
                                <option key={index} value={org}>
                                    {org}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="event-name">Event Name:</label>
                        <input type="text" id="event-name" required />

                        <label htmlFor="event-date">Event Date:</label>
                        <input type="date" id="event-date" required />

                        <label htmlFor="event-time">Event Time:</label>
                        <input type="time" id="event-time" required />

                        <label htmlFor="event-location">Event Location:</label>
                        <select id="event-location" required>
                            {eventLocations.map((location, index) => (
                                <option key={index} value={location}>
                                    {location}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="event-description">Event Description:</label>
                        <textarea id="event-description" rows="3" required></textarea>

                        <input type="submit" value="Create Event" />
                    </form>
                </section>
            </main>
        </div>
    );
}

export default HostEvent;
