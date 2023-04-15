import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import EventsPage from './EventsPage';
import NavbarComponent from './NavbarComponent';
import FooterComponent from './FooterComponent';
import BookingForm from './BookingPage'
import BookingList from './BookingList';
import EventForm from './EventForm'

function App() {
  return (
    <Router>
      <NavbarComponent />
      <div id="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/booking-list" element={<BookingList />} />
          <Route path="/event-form" element={<EventForm />} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
}


export default App;
