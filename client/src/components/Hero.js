import React from "react";
import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Save The Day!</h1>

    <p className="lead">
      This is where we can add info about our project functionalit ect!
    </p>
  </div>
);

export default Hero;
