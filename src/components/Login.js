// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import Cape from './images/logo.gif';
import './Login.css';

const Login = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="nav-container">
      <div className="row">
        <div className="col">
           <img className="image" src={Cape} alt="logo" />
           </div>
           <div className="col">
          <h1 className="Company-Name">$AVE THE DAY</h1>
          </div>
         
          <div className="col">
          {!isAuthenticated && (
            <button className="buttonGroup" onClick={() => loginWithRedirect({})}>Log in</button>)}
          {isAuthenticated && <button className="logout-button" onClick={() => logout()}>Log out</button>} &nbsp;
    
      {isAuthenticated && (
            <span>
              <Link to="/" style={{color: '#2f4f4f'}}>HOME |</Link>&nbsp;
              <Link to="/profile" style={{color: '#2f4f4f'}}>MY PROFILE |</Link>&nbsp;
              <Link to="/external-api" style={{color: '#2f4f4f'}}>MY SAVINGS</Link>
            </span>
          )}
        </div> 
        </div> 
        </div>
      );
    };
    
export default Login;