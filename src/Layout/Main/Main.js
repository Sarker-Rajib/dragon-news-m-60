import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';
import Header from '../../Pages/Shared/Header/Header';
import LeftSIdeNav from '../../Pages/Shared/LeftSideNav/LeftSIdeNav';
import RightSideNav from '../../Pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
   return (
      <>
         <Header></Header>
         <Container>
            <Row>
               <Col lg="2" className="d-none d-lg-block">
                  <LeftSIdeNav></LeftSIdeNav>
               </Col>
               <Col lg="7">
                  <Outlet></Outlet>
               </Col>
               <Col lg="3">
                  <RightSideNav></RightSideNav>
               </Col>
            </Row>
         </Container>
         <Footer></Footer>
      </>
   );
};

export default Main;