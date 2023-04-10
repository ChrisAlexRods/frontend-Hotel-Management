import * as React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Hotel Management</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/booking">Booking</Nav.Link>
          <Nav.Link as={Link} to="/booking-list">Booking List</Nav.Link>
          <Nav.Link as={Link} to="/event-form">Create Event</Nav.Link>
          <Nav.Link as={Link} to="/events">Events</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
