import React, { useContext, useReducer, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../Context/AuthProvider/Authprovider';

const Profile = () => {
   const {user} = useContext(AuthContext);
   const [name, setName] = useState(user.displayName);
   const photoUrlRef = useReducer(user.photoURL);

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(name);
   }

   const hanleNameChange = (e) => {
      setName(e.target.value);
   }

   return (
      <Form onSubmit={handleSubmit}>
         <Form.Group className="mb-3" controlId="A">
            <Form.Label>Email address</Form.Label>
            <Form.Control readOnly defaultValue={user?.email} name="email" type="email" />
         </Form.Group>

         <Form.Group className="mb-3" controlId="M">
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={hanleNameChange} defaultValue={name} name="Name" type="text" placeholder="Name" />
         </Form.Group>

         <Form.Group className="mb-3" controlId="B">
            <Form.Label>Photo Url</Form.Label>
            <Form.Control ref={photoUrlRef} defaultValue={user?.photoURL} name="PhotoURL" type="text" />
         </Form.Group>

         <Button variant="primary" type="submit">
            Log In
         </Button>
      </Form>
   );
};

export default Profile;