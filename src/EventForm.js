import { useState, useEffect } from 'react';
import './EventFormStyles.css';
import CarouselSection from './CarouselSection';

const EventForm = (props) => {
  const { eventToEdit, setEventToEdit } = props;
  const [eventData, setEventData] = useState({
    name: '',
    start_date: '',
    end_date: '',
    location: '',
    description: '',
    picture_url: '' // Add the new state property here
  });

  useEffect(() => {
    if (eventToEdit) {
      setEventData(eventToEdit);
    }
  }, [eventToEdit]);

  const [success, setSuccess] = useState(false);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setEventData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const method = eventToEdit ? 'PUT' : 'POST';
    const url = eventToEdit ? `/api/events/${eventToEdit.id}/` : '/api/events/';

    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(response => {
        if (response.ok) {
          setSuccess(true);
          setEventData({
            name: '',
            start_date: '',
            end_date: '',
            location: '',
            description: '',
            picture_url: '' // Reset the picture_url value
          });
          if (eventToEdit) {
            setEventToEdit(null);
          }
          if (props.onRefreshEvents) {
            props.onRefreshEvents();
          }
        } else {
          throw new Error('Something went wrong');
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <>
      <main className="event-page-content">
        <CarouselSection />
        <div className="form-overlay">
          <div className="container">
            <div className="event-form-container">
              <h2>Event Form</h2>
              {success ? (
                <div className="alert alert-success" role="alert">
                  Event submitted successfully.
                </div>
              ) : null}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Event Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={eventData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="start_date">Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="start_date"
                    name="start_date"
                    value={eventData.start_date}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="end_date">End Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="end_date"
                    name="end_date"
                    value={eventData.end_date}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    name="location"
                    value={eventData.location}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={eventData.description}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                {/* Picture URL form group */}
                <div className="form-group">
                  <label htmlFor="picture_url">Picture URL</label>
                  <input
                    type="text"
                    className="form-control"
                    id="picture_url"
                    name="picture_url"
                    value={eventData.picture_url}
                    onChange={handleInputChange}
                  />
                  {eventData.picture_url && (
                    <div className="mt-3">
                      <img
                        src={eventData.picture_url}
                        alt="Event"
                        style={{
                          maxWidth: '100%',
                          maxHeight: '200px',
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                  )}
                </div>

                <button type="submit" className="btn btn-primary">
                  {eventToEdit ? 'Update' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );

};


export default EventForm;
