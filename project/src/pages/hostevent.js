import React from 'react';
import NavBar from './components/navbar';
import { GetTeamInfo } from './components/dbHelper';
import './hostevent.css';

function HostEvent() {
    const organizations = ['Samahang Modern', 'ACA All Day', 'VSU Modern', 'Foundations Choreography'];
    const eventLocations = ['Lot 4 P1', 'Lot 4 P2', 'Lot 7 P1', 'Lot 8 P2', 'Lot DD', 'Pauley Pavillion (LATC)', 'Bruin Plaza', 'Wooden'];

    return (
        <div>
            <NavBar />

            <main style={{ paddingTop: '4rem' }}>
                <section className="event-details">
                    <h2>Create an Event</h2>
                    <form action="eventshub.html" method="post">
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
