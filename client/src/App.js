import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuth0 } from './react-auth0-spa';
// import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import Profile from './components/profile/Profile';
import history from "./utils/history";
import PrivateRoute from './components/privateRoute/PrivateRoute';
import './App.css';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
    <Router history={history}>
      <header>
        <NavBar />
      </header>
      <Switch>
        <Route path="/" exact />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </Router>
  </div>
  );
}

export default App;