import * as React from 'react';
import { useEffect, useState } from 'react';
import './EventsPageStyles.css';

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events/');
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const eventsData = await response.json();
      setEvents(eventsData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="events-page-content">
      <h1>Meetings and Events Page</h1>
      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <ul>
          {events.map(event => (
            <li key={event.id}>
              <h2>{event.name}</h2>
              <p>Start Date: {event.start_date}</p>
              <p>End Date: {event.end_date}</p>
              <p>Location: {event.location}</p>
              <p>Description: {event.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventsPage;