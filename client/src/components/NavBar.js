// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import Cape from './images/logo.gif';
import './NavBar.css'

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="nav-container">
      <img src={Cape} alt="logo" />
      <h1 className="Company-Name">$ave The Day</h1>

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

    </div>
  );
};

export default NavBar;