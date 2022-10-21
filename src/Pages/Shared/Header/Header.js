import React, { useContext } from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/Authprovider';
import LeftSIdeNav from '../LeftSideNav/LeftSIdeNav';

const Header = () => {
   const { user, logOut } = useContext(AuthContext);

   const handleLogOut = () => {
      logOut()
         .then(() => { })
         .catch(error => console.error(error));
   }

   return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="mb-3">
         <Container>
            <Navbar.Brand><Link to="/">Dragon News</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.2">
                        Another action
                     </NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href="#action/3.4">
                        Separated link
                     </NavDropdown.Item>
                  </NavDropdown>
               </Nav>
               <Nav>

                  {
                     user?.uid ?
                        <>
                           <span>{user?.email}</span>
                           <span className="text-success me-2 fs-5">{user?.displayName}</span>
                           {user?.photoURL ?
                              <Image
                                 style={{ height: '35px' }}
                                 src={user.photoURL}></Image>
                              : <p>No I</p>
                           }
                           <Button onClick={handleLogOut} className="ms-2">Log Out</Button>
                        </>
                        :
                        <>
                           <Link className='fs-5 me-3' to='/login'>Login</Link>
                           <Link className='fs-5' to='/register'>Register</Link>
                        </>
                  }

                  {/* <Nav.Link eventKey={2} href="#memes">
                     {user?.photoURL ?
                        <Image
                           style={{ height: '35px' }}
                           src={user.photoURL}></Image>
                        : <p>No I</p>
                     }
                  </Nav.Link> */}
               </Nav>

               <div className="d-block d-lg-none">
                  <LeftSIdeNav></LeftSIdeNav>
               </div>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default Header;