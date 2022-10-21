import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/Authprovider';

const Register = () => {
   const { createUser, updateUserProfile } = useContext(AuthContext);
   const [error, setError] = useState('');
   const [accepted, setAccepted] = useState(false);


   const handleSubmit = (e) => {
      e.preventDefault();

      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const photoURL = form.photoUrl.value;
      const password = form.password.value;

      // console.log(name, email, photoUrl, password);

      createUser(email, password)
         .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset();
            handleupdateUserProfile(name, photoURL);
            setError('');
         })
         .catch((error) => {
            console.error(error);
            setError(error.message);
         })
   }

   const handleupdateUserProfile = (name, photoURL) => {
      const profile = {
         displayName: name,
         photoURL: photoURL
      }
      updateUserProfile(profile)
      .then(() => {})
      .catch(error => console.error(error))
   }

   const handleCheck = (e) => {
      setAccepted(e.target.checked)
   }

   return (
      <div className="border p-3 rounded shadow">
         <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
               <Form.Label>Name</Form.Label>
               <Form.Control name="name" type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
               <Form.Label>Photo Link</Form.Label>
               <Form.Control name="photoUrl" type="text" placeholder="Enter photoUrl" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
               <Form.Check
                  type="checkbox"
                  onClick={handleCheck}
                  label={<>Accept <Link to="/terms">Terms & Condition</Link></>} />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!accepted}>
               Sign Up
            </Button>
         </Form>
         <p className="my-2">Have an Account ? <Link to="/login">Log In</Link></p>
         <span className="text-danger">{error}</span>
      </div>
   );
};

export default Register;