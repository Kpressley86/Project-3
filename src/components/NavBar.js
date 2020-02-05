// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import Cape from './images/logo.gif';
import './NavBar.css'
import { Container, Row, Col } from 'reactstrap';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Container className="themed-container" fluid={true} style={{backgroundColor: '#F0F8FF'}}>
      <Row>
        <Col xs="3">
          <div className="superheroimage">
            <img className="superimage" src={Cape} alt="logo" />
          </div>
        </Col>
        <Col xs="6">
          <h1 className="Company-Name">$ave The Day</h1>
        </Col>
        <Col xs="3">
          {!isAuthenticated && (
            <button onClick={() => loginWithRedirect({})}>Log in</button>)}
          {isAuthenticated && <button onClick={() => logout()}>Log out</button>} &nbsp;

          {isAuthenticated && (
            <span>
              <Link to="/">Home |</Link>&nbsp;
              <Link to="/profile">My Profile |</Link>&nbsp;
              <Link to="/external-api">My Savings</Link>
            </span>
          )}
        </Col>
      </Row>

    </Container>
  );
};

export default NavBar;