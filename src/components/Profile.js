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
        <Row>
          <Card>
            <Col>
              <img src={user.picture} alt="Profile" />
            </Col>
            <Col>
              <h2>Welcome {user.name}!</h2>

              <h3>User Email: {user.email}</h3>
              {/* <code>{JSON.stringify(user, null, 2)}</code> */}
            </Col>
          </Card>
        </Row>
        <Row>
          <div>
            <FormChartData />
          </div>
        </Row>
      </Fragment>

    </Container>
  );
};

export default Profile;