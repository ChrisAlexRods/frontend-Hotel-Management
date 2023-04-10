import * as React from 'react';
import { useEffect, useState } from 'react';
import './EventsPageStyles.css';
import EventForm from './EventForm';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [eventToEdit, setEventToEdit] = useState(null);

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

  const deleteEvent = async id => {
    try {
      const response = await fetch(`/api/events/${id}/`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete event');
      }
      setEvents(events.filter(event => event.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const refreshEvents = () => {
    fetchEvents();
  };

  return (
    <div className="events-page-content">
      <h1>Meetings and Events Page</h1>
      {eventToEdit && (
        <EventForm
          eventToEdit={eventToEdit}
          setEventToEdit={setEventToEdit}
          onRefreshEvents={refreshEvents}
        />
      )}
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
              <button onClick={() => setEventToEdit(event)}>Edit</button>
              <button onClick={() => deleteEvent(event.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventsPage;
