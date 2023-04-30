import * as React from 'react';
import { useEffect, useState } from 'react';
import './EventsPageStyles.css';
import EventForm from './EventForm';
import CarouselSection from './CarouselSection';

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
        <div className="row">
          {events.map(event => (
            <div key={event.id} className="col-md-2 event-card-wrapper">
              <div className="card">
                <h2 className="card-header">{event.name}</h2>
                {event.picture_url && (
                  <img
                    className="card-img-top"
                    src={event.picture_url}
                    alt={event.name}
                  />
                )}
                <div className="card-body">
                  <p>Start Date: {event.start_date}</p>
                  <p>End Date: {event.end_date}</p>
                  <p>Location: {event.location}</p>
                  <p>Description: {event.description}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => setEventToEdit(event)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteEvent(event.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );


};

export default EventsPage;