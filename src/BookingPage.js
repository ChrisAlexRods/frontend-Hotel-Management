import { useState } from 'react';
import './BookingPageStyles.css';

const BookingForm = () => {
  const [bookingData, setBookingData] = useState({
    start_date: '',
    end_date: '',
    room_type: '',
    guest_name: '',
    guest_email: ''
  });
  const [success, setSuccess] = useState(false);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setBookingData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch('/api/bookings/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    })
      .then(response => {
        if (response.ok) {
          setSuccess(true);
          setBookingData({
            start_date: '',
            end_date: '',
            room_type: '',
            guest_name: '',
            guest_email: ''
          });
        } else {
          throw new Error('Something went wrong');
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <main className="booking-page-content">
      <div className="container">
        <div className="booking-form-container">
          <h2>Booking Form</h2>
          {success ? (
            <div className="alert alert-success" role="alert">
              Booking submitted successfully.
            </div>
          ) : null}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="start_date">Start Date</label>
              <input
                type="date"
                className="form-control"
                id="start_date"
                name="start_date"
                value={bookingData.start_date}
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
                value={bookingData.end_date}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="room_type">Room Type</label>
              <input
                type="text"
                className="form-control"
                id="room_type"
                name="room_type"
                value={bookingData.room_type}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="guest_name">Guest Name</label>
              <input
                type="text"
                className="form-control"
                id="guest_name"
                name="guest_name"
                value={bookingData.guest_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="guest_email">Guest Email</label>
              <input
                type="email"
                className="form-control"
                id="guest_email"
                name="guest_email"
                value={bookingData.guest_email}
                onChange={handleInputChange}
              />
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

export default BookingForm;

///hi///