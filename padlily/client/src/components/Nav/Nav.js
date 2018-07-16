import React from "react";
import { Navbar, NavbarBrand, NavbarItem, Icon, NavbarBurger, NavbarEnd } from 'bloomer';
import 'bulma/css/bulma.css';
import "./Nav.css";

const Nav = () => (

  <Navbar className="navbar">
  <NavbarBrand>
      <NavbarItem>
          <img src="" style={{ marginRight: 5 }} /> Lilypad Rentals
      </NavbarItem>
  </NavbarBrand>
  <NavbarEnd>
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
