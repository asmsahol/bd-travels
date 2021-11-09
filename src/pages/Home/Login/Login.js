/** @format */

import Button from "@restart/ui/esm/Button";
import React from "react";
import "./Login.css";
import { Container, Form, Row } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";
  const history = useHistory();
  const hundleGoogleLogin = () => {
    signInWithGoogle().then(result => {
      history.push(redirect_uri);
    });
  };
  return (
    <Container className='w-50% login_from'>
      <Form>
        <Form.Group
          as={Row}
          className='mb-3 login-mail'
          controlId='formGroupEmail'
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            suggested='true'
            type='email'
            placeholder='Enter email'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            suggested='true'
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Button className='log_in'>Log in</Button>
        </Form.Group>
        <br />
        <Form.Group className='mb-3'>
          <Button className='log_in_google' onClick={hundleGoogleLogin}>
            Log in With Google
          </Button>
        </Form.Group>
        <br />
        <Form.Group className='mb-3'>
          <Link to='/signup'>New User?</Link>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Login;
