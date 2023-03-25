import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <Container>
        <Row>
          <Col className="text-center py-3">
            &copy; {new Date().getFullYear()} Hotel Management. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
