import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import EventsPage from './EventsPage';
import NavbarComponent from './NavbarComponent';
import FooterComponent from './FooterComponent';
import BookingForm from './BookingPage'

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;
