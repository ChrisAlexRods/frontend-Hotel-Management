import { useState } from 'react';
import './EventFormStyles.css';

const EventForm = () => {
  const [eventData, setEventData] = useState({
    name: '',
    start_date: '',
    end_date: '',
    location: '',
    description: ''
  });
  const [success, setSuccess] = useState(false);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setEventData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch('/api/events/', {
      method: 'POST',
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
            description: ''
          });
        } else {
          throw new Error('Something went wrong');
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <main className="event-page-content">
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
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default EventForm;
