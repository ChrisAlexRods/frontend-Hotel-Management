import React, { useState, useEffect } from 'react';
import './BookingListStyles.css';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('/api/bookings/')
      .then(response => response.json())
      .then(data => setBookings(data));
  }, []);

  return (
    <main className="booking-list-page">
      <div className="booking-list-container">
        <h2>Booking List</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Room Type</th>
              <th>Guest Name</th>
              <th>Guest Email</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <tr key={booking.id}>
                <td>{booking.start_date}</td>
                <td>{booking.end_date}</td>
                <td>{booking.room_type}</td>
                <td>{booking.guest_name}</td>
                <td>{booking.guest_email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default BookingList;
