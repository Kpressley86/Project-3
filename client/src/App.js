import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import { useAuth0 } from './react-auth0-spa';
// import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import Profile from './views/Profile';
import history from "./utils/history";
import PrivateRoute from './components/privateRoute/PrivateRoute';
import './App.css';
import Footer from "./components/footer/Footer";
import Loading from "./components/Loading";
import Form from "./components/form/Form";
import Home from "./views/Home";
// import GiantBackground from './images/logo.gif';
// import Graph from "./components/graph/Graph";




const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (

    <Router history={history}>
      
      <div id="app" className="d-flex flex-column h-100">
        {/* <GiantBackground> */}
        <NavBar />
        
          <Container className="flex-grow-1 mt-5">
            <Switch>
              <Form></Form>
              {/* <Graph></Graph> */}
              <Route path="/" exact component={Home} />
              <PrivateRoute path="/profile" component={Profile} />
            </Switch>
          </Container>
        
        <Footer />
      {/* </GiantBackground> */}
      </div>
      
    </Router>
  );
};

export default App;
