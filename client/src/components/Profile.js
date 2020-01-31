// src/components/Profile.js

import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import FormChartData from "../views/FormChartData";
import './Profile.css'

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <img src={user.picture} alt="Profile" />

      <h2>Welcome {user.name}!</h2>
      <h3>User Email: {user.email}</h3>
      {/* <code>{JSON.stringify(user, null, 2)}</code> */}
      <div>
        <FormChartData />
      </div>
    </Fragment>
  );
};

export default Profile;