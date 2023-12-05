import React from 'react';
import NavBar from './components/navbar';
import { CheckIfAuth, createEvent } from './components/dbHelper.js';
import moment from 'moment-timezone';
import { useNavigate } from 'react-router-dom';
import './hostevent.css';

function HostEvent() {
    CheckIfAuth();

    const organizations = ['Samahang Modern', 'ACA All Day', 'VSU Modern', 'Foundations Choreography', 'KBM Dance'];
    const eventLocations = ['Lot 4 P1', 'Lot 4 P2', 'Lot 7 P1', 'Lot 8 P2', 'Lot DD', 'Pauley Pavillion (LATC)', 'Bruin Plaza', 'Wooden'];
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const startDate = document.getElementById('event-date').value;
        const startTime = document.getElementById('event-start-time').value;
        const startDateTimeString = `${startDate}T${startTime}`;
        const startUnixTimestamp = moment.tz(startDateTimeString, 'America/Los_Angeles').unix();

        const endDate = document.getElementById('event-date').value; // Assuming end date is the same as start date
        const endTime = document.getElementById('event-end-time').value;
        const endDateTimeString = `${endDate}T${endTime}`;
        const endUnixTimestamp = moment.tz(endDateTimeString, 'America/Los_Angeles').unix();

        const newEvent = {
            organization: document.getElementById('organization').value,
            name: document.getElementById('event-name').value,
            startDate: startDate,
            startTime: startTime,
            startUnixDate: startUnixTimestamp,
            endDate: endDate,
            endTime: endTime,
            endUnixDate: endUnixTimestamp,
            location: document.getElementById('event-location').value,
            description: document.getElementById('event-description').value
        };

        try {
            const eventResponse = await createEvent(newEvent);
            const eventId = eventResponse.key;
            navigate(`/eventconfirmation/${eventId}`);
        } catch (error) {
            console.error('Error creating event: ', error);
        }
    };

    return (
        <div className="HE">
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

                        <label htmlFor="event-start-time">Event Start Time:</label>
                        <input type="time" id="event-start-time" required />

                        <label htmlFor="event-end-time">Event End Time:</label>
                        <input type="time" id="event-end-time" required />

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
