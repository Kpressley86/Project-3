// src/App.js

import React from "react";
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import ExternalApi from "./views/PieApi";
import './App.css';

import Home from './views/Home'


function App() {
  return (
    <Router history={history}>
     
      <div id="App" className="App">
        <Nav />
        <br></br>
        <br></br>
        <Switch>
          <Route path="/" exact component={Home}/>
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/external-api" component={ExternalApi} />
        </Switch>
        
        
      </div>
       <div>
         <Footer />
       </div>
    </Router>
  );
}

export default App;