// src/App.js

import React from "react";
import NavBar from "./components/NavBar";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import ExternalApi from "./views/PieApi";
import './App.css';
import Footer from "./components/footer/Footer";
import Home from './views/Home'


function App() {
  return (
    <Router history={history}>
      <div id="App" className="App d-flex flex-column h-100">
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact component={Home}/>
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/external-api" component={ExternalApi} />
        </Switch>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;