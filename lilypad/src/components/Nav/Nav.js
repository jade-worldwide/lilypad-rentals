import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarItem,  NavbarEnd, Modal, ModalCard, ModalCardTitle, ModalBackground, ModalCardFooter, ModalCardHeader, Delete } from 'bloomer';
import { Link } from "react-router-dom";
import 'bulma/css/bulma.css';
import "./Nav.css";
import pad from "./pad.png";
import { SignUpModal } from "./SignUpModal";

const padLogo = { image: `url(${pad})` }

export class Nav extends Component {

  state = {
    modal: ""
  };

  modalOpen = () => {
    this.setState({ modal: "is-active" })
  }


  modalClose = () => {
    this.setState({ modal: "" })
  }

  render() {
    return (
      <Navbar className="navbar">
        <NavbarBrand>
          <NavbarItem className="nav-logo-item">
            <img src={pad} />
          </NavbarItem>
          <NavbarItem>
              <Link to={"/"}><p className="nav-title">Lilypad Rentals</p></Link>
          </NavbarItem>
        </NavbarBrand>
        <NavbarEnd>
          <NavbarItem>
              <Link to={"/property"}><p>Property</p></Link>
          </NavbarItem>
          <NavbarItem>
              <Link to={"/results"}><p>Results</p></Link>
          </NavbarItem>
          <NavbarItem>
              <Link to={"/manager"}><p>Property Form</p></Link>
          </NavbarItem>
          <NavbarItem href="#">
              <p>Create Listing</p>
          </NavbarItem>
          <NavbarItem href="#">
              <p>Log in</p>
          </NavbarItem>
          <NavbarItem href="#" onClick={this.modalOpen}>
              <p>Sign Up</p>
          </NavbarItem>
        </NavbarEnd>
        <div className="new-modal">
          <Modal className={this.state.modal}>
            <ModalBackground />
            <ModalCard>
                <ModalCardHeader>
                    <ModalCardTitle></ModalCardTitle>
                    <Delete onClick={this.modalClose} />
                </ModalCardHeader>
            <SignUpModal />
              <ModalCardFooter hasTextAlign="centered">
                <p>Already have an account? <Link to={""}>Log In</Link></p>
              </ModalCardFooter>
          </ModalCard>
          </Modal>
        </div>
      </Navbar>
    );
  }
}
