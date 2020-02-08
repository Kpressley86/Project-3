// src/components/Profile.js

import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import FormChartData from "../views/FormChartData";
import './Profile.css'
import { Container, Row, Col, Card } from 'reactstrap';


const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="themed-container" fluid={true}>
      <Fragment>
        <br></br>
        <br></br>
        <Row>

          <Col sm="1"></Col>
          <Col sm="10" id="infobox">
            <Card>
              <Row>
                <Col xs="2">
                  <img className="profilepic" src={user.picture} alt="Profile" />
                </Col>
                <Col sm="10">
                  <div className="card card-body mb-3">
                    <form>
                      <h4>Welcome {user.name}!</h4>
                      <h4>User Email: {user.email}</h4>
                    </form>
                  </div>
                </Col>
              </Row>

              {/* <code>{JSON.stringify(user, null, 2)}</code> */}
            </Card>
          </Col>
          <Col sm="1"></Col>


        </Row>
        <br></br>
        <br></br>
        <Row>
          
          <Col sm="12">
            <div>
              
              <FormChartData />
            </div>
          </Col>
          
        </Row>
      </Fragment>

    </Container>
  );
};

export default Profile;