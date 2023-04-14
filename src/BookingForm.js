import React, { useState } from 'react';
import styles from './HomePage.module.css';

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
    <form className={styles.bookingForm} onSubmit={handleSubmit}>
      <input
        type="date"
        name="start_date"
        value={bookingData.start_date}
        onChange={handleInputChange}
        required
      />
      <input
        type="date"
        name="end_date"
        value={bookingData.end_date}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="room_type"
        value={bookingData.room_type}
        onChange={handleInputChange}
        placeholder="Room Type"
        required
      />
      <input
        type="text"
        name="guest_name"
        value={bookingData.guest_name}
        onChange={handleInputChange}
        placeholder="Guest Name"
        required
      />
      <input
        type="email"
        name="guest_email"
        value={bookingData.guest_email}
        onChange={handleInputChange}
        placeholder="Guest Email"
        required
      />
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
