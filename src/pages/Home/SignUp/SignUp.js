/** @format */

import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const SignUp = () => {
  const { hundleRegistration, hundleEmailChange, hundlePasswordChange } =
    useAuth();
  return (
    <Container>
      <Form onSubmit={hundleRegistration}>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              onChange={hundleEmailChange}
              placeholder='Enter email'
              suggested
            />
          </Form.Group>
        </Row>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridPassword'>
            <Form.Label suggested='true'>Password</Form.Label>
            <Form.Control
              type='password'
              onBlur={hundlePasswordChange}
              placeholder='Password'
              suggested
            />
          </Form.Group>
        </Row>

        <Form.Group className='mb-3' controlId='formGridAddress1'>
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder='1234 Main St' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formGridAddress2'>
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder='Apartment, studio, or floor' />
        </Form.Group>

        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridCity'>
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridState'>
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue='Choose...'>
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId='formGridZip'>
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
        <Button variant='success' type='submit'>
          Register
        </Button>
        <br />
        <br />
        <Row>
          <Form.Group className='mb-5' id='formGridCheckbox'>
            <Link to='/login'>Already Register?</Link>
          </Form.Group>
        </Row>
      </Form>
    </Container>
  );
};

export default SignUp;
