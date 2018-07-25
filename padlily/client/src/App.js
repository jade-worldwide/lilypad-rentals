import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav } from "./components/Nav";
import Main from "./pages/Main";
import Renter from "./pages/Renter";
import Manager from "./pages/Manager";
import Property from "./pages/Property";
import Results from "./pages/Results";
import { SignUpModal } from "./components/Nav/SignUpModal.js";


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/renter" component={Renter} />
        <Route exact path="/manager" component={Manager} />
        <Route exact path="/property" component={Property} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/api/users/register" component={SignUpModal} />

      </Switch>
    </div>
  </Router>
);

export default App;
