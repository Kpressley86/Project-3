import React, { Component } from 'react';
import '../team/Team.css';

class Team extends Component {
    render() {
        return (
            <div>
                <div className="card card-body">
                    <h3 className="text-center" style={{ color: '#8B0000' }}>MEET OUR TEAM</h3>
                    <hr></hr>
                    <div className="row">
                        <div className="col-lg-3">
                           <div className="card team-card">
                                    <img src={require('./picOne.png')} alt=""/>
                                    <h3>Kelly Pressley</h3>
                                    <h4 className="title">Team Leader</h4>
                                    <p>Authentication and Back-End</p>
                                    <p>example@test.com</p>
                                    <p><button className="team-button">Send</button></p>
                                </div>
                            </div>
                            <br></br>
                            <div className="col-lg-3">
                                <div className="card team-card">
                                    <img src={require('./picTwo.png')} alt=""/>
                                    <h3>Jaber Basem</h3>
                                    <h4 className="title">Member</h4>
                                    <p>Back-End</p>
                                    <p>example@test.com</p>
                                    <p><button className="team-button">Send</button></p>
                                </div>
                            </div>
                             <br></br>
                            <div className="col-lg-3">
                                <div className="card team-card">
                                    <img src={require('./picThree.png')} alt=""/>
                                    <h3>MariaMay Roberts</h3>
                                    <h4 className="title">Member</h4>
                                    <p>Front-End</p>
                                    <p>example@test.com</p>
                                    <p><button className="team-button">Send</button></p>
                                </div>
                            </div>
                            <br></br>
                            <div className="col-lg-3">
                                <div className="card team-card">
                                    <img src={require('./picFour.png')} alt="" />
                                    <h3>Tyler Thompson</h3>
                                    <h4 className="title">Member</h4>
                                    <p>Front-End</p>
                                    <p>example@test.com</p>
                                    <p><button className="team-button">Send</button></p>
                                </div>
                            </div>
                        </div>
                    </div>
              </div>
        );
    }
}


export default Team;