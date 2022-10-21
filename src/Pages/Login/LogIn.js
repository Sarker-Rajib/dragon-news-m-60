import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/Authprovider';


const LogIn = () => {
   const navigate = useNavigate();
   const {signIn} = useContext(AuthContext);
   const [error, setError] = useState('');
   const location = useLocation();

   const from = location.state?.from?.pathname || '/';

   const handleSubmit = (e) => {
      e.preventDefault();

      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      // console.log(name, email, photoUrl, password);

      signIn(email, password)
      .then((result) => {
         const user = result.user;
         console.log(user);
         form.reset();
         setError('')
         navigate(from, {replace : true});
      })
      .catch((error) => {
         console.error(error);
         setError(error.message);
      })
   }

   return (
      <div className="border p-3 rounded shadow">
         <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
               Log In
            </Button>
         </Form>
         <p className="my-2">New Here ? <Link to="/register">Register</Link></p>
         <span className="text-danger">{error}</span>
      </div>
   );
};

export default LogIn;