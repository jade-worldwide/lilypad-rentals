import React from "react";
import { Navbar, NavbarBrand, NavbarItem, Icon, NavbarBurger, NavbarEnd } from 'bloomer';
import { Link } from "react-router-dom";
import 'bulma/css/bulma.css';
import "./Nav.css";

const Nav = () => (

  <Navbar className="navbar">
  <NavbarBrand>
      <NavbarItem>
          <Link to={"/"}><p>Lilypad Rentals</p></Link>
      </NavbarItem>
  </NavbarBrand>
  <NavbarEnd>
    <NavbarItem>
        <Link to={"/property"}><p>Property</p></Link>
    </NavbarItem>
    <NavbarItem>
        <Link to={"/results"}><p>Results</p></Link>
    </NavbarItem>
    <NavbarItem href="#">
        <p>Create Listing</p>
    </NavbarItem>
    <NavbarItem href="#">
        <p>Log in</p>
    </NavbarItem>
    <NavbarItem href="#">
        <p>Sign Up</p>
    </NavbarItem>
</NavbarEnd>

  </Navbar>

);

export default Nav;
