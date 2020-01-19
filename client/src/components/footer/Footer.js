import React from "react";
import Cape from '../../images/logo.gif';

const Footer = () => (
  <footer className="bg-light p-3 text-center">
    <div>
      <img src={Cape} alt="logo" />
    </div>
    <p>
      Project-3 Contributions by: 
      <a href="https://github.com/Kpressley86?tab=repositories"> Kelly Pressley, </a>
      <a href="https://github.com/bjaber?tab=repositories">Basem Jaber, </a>
      <a href="https://github.com/Tyler-D-Thompson?tab=repositories">Tyler Thompson, </a>
      <a href="https://github.com/maria341?tab=repositories">Mariamay Roberts</a>
    </p>
  </footer>
);

export default Footer;
