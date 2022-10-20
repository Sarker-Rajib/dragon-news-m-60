import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../../../Component/BrandCarousel/BrandCarousel';


const RightSideNav = () => {
   return (
      <>
         <ButtonGroup vertical>
            <Button variant="outline-primary" className="mb-2"><FaGoogle></FaGoogle> LogIn with Google</Button>
            <Button variant="outline-primary"><FaGithub></FaGithub> LogIn with GitHub</Button>
         </ButtonGroup>

         <h2 className="mt-3">Find Us on</h2>
         <ListGroup>
            <ListGroup.Item><FaFacebookF></FaFacebookF> FaceBook</ListGroup.Item>
            <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
            <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
            <ListGroup.Item><FaLinkedinIn></FaLinkedinIn> Linked In</ListGroup.Item>
         </ListGroup>

         <div className="mt-3">
            <BrandCarousel></BrandCarousel>
         </div>
      </>
   )
};

export default RightSideNav;