import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
      <Container className="pt-3">
         <Row className="py-3 bg-light">
            <Col lg="6">
               All Rights reserved @Yo YO
            </Col>
            <Col lg="6" className="text-end">
               <Link className="me-2 fs-5" to="/">Link</Link>
               <Link className="me-2 fs-5" to="/">Link</Link>
               <Link className="me-2 fs-5" to="/">Link</Link>
               <Link  className=" fs-5" to="/">Link</Link>
            </Col>
         </Row>
      </Container>
   );
};

export default Footer;