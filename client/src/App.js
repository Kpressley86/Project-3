import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import { useAuth0 } from './react-auth0-spa';
// import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import Profile from './components/profile/Profile';
import history from "./utils/history";
import PrivateRoute from './components/privateRoute/PrivateRoute';
import './App.css';
import Footer from "./components/footer/Footer";
import Loading from "./components/Loading";
import Home from "./views/Home";

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <PrivateRoute path="/profile" component={Profile} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
