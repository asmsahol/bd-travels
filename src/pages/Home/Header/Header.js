/** @format */

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className='my-nav'>
      <Navbar
        bg='danger'
        variant='danger'
        className='shadow-sm p-3 bg-body rounded'
      >
        <Container>
          <div className='mobile-div'>
            <Navbar.Brand className='title' href='/home'>
              <h3 className='head-title'>BD Travels</h3>
            </Navbar.Brand>
          </div>
          <div className='mobile-div'>
            <Nav variant='pills' defaultActiveKey='/home'>
              <Nav.Item className='my-nav-link'>
                <Link className='nav-link menu' to='/home'>
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className='nav-link menu' to='/services'>
                  Services
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className='nav-link menu' to='/travels_way'>
                  Travel's Way
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className='nav-link menu' to='/about'>
                  About Us
                </Link>
              </Nav.Item>
              <Nav.Item>
                {!user?.email && (
                  <Link className='nav-link menu text-white' to='/signup'>
                    Sign Up
                  </Link>
                )}
              </Nav.Item>
              <Nav.Item>
                {!user?.email && (
                  <Link className='nav-link menu' to='/login'>
                    Log In
                  </Link>
                )}
              </Nav.Item>
              <Nav.Item>
                {user?.email && (
                  <Link className='nav-link menu place-order' to='/order'>
                    My Order
                  </Link>
                )}
              </Nav.Item>
              <Nav.Item>
                {user?.email && (
                  <Link className='nav-link menu place-order' to='/admin'>
                    Admin
                  </Link>
                )}
              </Nav.Item>
              {user?.email && (
                <button className='logout' onClick={logOut}>
                  Log Out
                </button>
              )}
              {user?.email && (
                <Nav.Link eventKey='disabled' disabled>
                  <div className='login-name-photo'>
                    <p>Login as {user?.displayName}</p>
                    <img className='login-photo' src={user?.photoURL} alt='' />
                  </div>
                </Nav.Link>
              )}
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
