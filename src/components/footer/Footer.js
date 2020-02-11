import React, { Component } from "react";
import Cape from '../images/logo.gif';
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="themed-container" fluid="true" style={{ backgroundColor: '#2F4F4F' }} >
          <div className="p-3 text-center">
            <div className="row">
              <div className="col-xs-6">
                <p className="pppp">
                  Project-3 Contributions by:
                  <a className="kelly" href="https://github.com/Kpressley86?tab=repositories"> Kelly Pressley, </a>
                  <a className="basem" href="https://github.com/bjaber?tab=repositories">Basem Jaber, </a>
                  <a className="tyler" href="https://github.com/Tyler-D-Thompson?tab=repositories">Tyler Thompson, </a>
                  <a className="mariamay" href="https://github.com/maria341?tab=repositories">Mariamay Roberts</a>
                </p>
              </div>
              <div className="col-xs-6">
                <div>
                  <img className="footering" src={Cape} alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </footer>
    );
  }

}

export default Footer;
