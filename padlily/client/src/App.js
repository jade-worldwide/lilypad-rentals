import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Main from "./pages/Main";
import Renter from "./pages/Renter";
import Manager from "./pages/Manager";
import Property from "./pages/Property";
import Results from "./pages/Results";
import ManagerTest from "./pages/ManagerTest";
// import { SignUpModal } from "./components/Nav/SignUpModal.js";
// import { isatty } from 'tty';


// function PrivateRoute({
//   component: Component, isAuthed, ...rest
// }) {
// return (
//   <Route {...rest} render={props => 
//   isAuthed ? (<Component {...props} />) : 
// (<Redirect to={{pathname: "/", state: {from: props.location }} } />)}M />)
// }

const App = () => (

  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/renter" component={Renter} />
        <Route exact path="/manager/:id" component={Manager} />
        <Route exact path="/results/:id" component={Manager} />
        <Route exact path="/managertest" component={ManagerTest} />
        <Route exact path="/property" component={Property} />
        <Route exact path="/property/:id" component={Property} />
        <Route exact path="/results" component={Results} />
        {/* <Route exact path="/api/users/register" component={SignUpModal} /> */}

      </Switch>
    </div>
  </Router>
);

export default App;
