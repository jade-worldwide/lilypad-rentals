import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarItem,  NavbarEnd, Modal, ModalCard, ModalCardTitle, ModalBackground, ModalCardFooter, ModalCardHeader, Delete, ModalCardBody } from 'bloomer';
import { Link } from "react-router-dom";
import StepZilla from "react-stepzilla";
import 'bulma/css/bulma.css';
import "./Nav.css";
import pad from "./pad.png";
import modal from "./modal.svg";
import { SignUpModal } from "./SignUpModal";
import { LoginModal } from "./LoginModal";
import { MemberType } from "./MemberType";

const padLogo = { image: `url(${pad})` }
const steps =
    [
      {name: 'Step 1', component: <MemberType />},
      {name: 'Step 2', component: <SignUpModal />}
    ]

const modalBG = { backgroundImage: `url(${modal})` }

export class Nav extends Component {

  state = {
    modal: "",
    login: "",
  };

  modalOpen = () => {
    this.setState({ modal: "is-active" })
  }

  loginOpen = () => {
    this.setState({ login: "is-active" })
  }


  modalClose = () => {
    this.setState({
      modal: "",
      login: "",
     })
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
              <Link to={"/renter"}><p>Renter</p></Link>
          </NavbarItem>
          <NavbarItem>
              <Link to={"/manager"}><p>Property Manager</p></Link>
          </NavbarItem>
          <NavbarItem href="#">
              <p>Create Listing</p>
          </NavbarItem>
          <NavbarItem href="#" onClick={this.loginOpen}>
              <p>Log in</p>
          </NavbarItem>
          <NavbarItem href="#" onClick={this.modalOpen}>
              <p>Sign Up</p>
          </NavbarItem>
        </NavbarEnd>

        <div className="signup-modal">
          <Modal className={this.state.modal}>

            <ModalBackground />
            <ModalCard style={ modalBG } >

                <ModalCardBody>
                    <Delete onClick={this.modalClose} />

                    <div className='step-progress'>
                        <StepZilla
                          steps={steps}
                          showSteps={false}
                          nextButtonCls="button is-medium is-primary"
                          backButtonCls="button is-medium is-primary"
                          />
                    </div>

              </ModalCardBody>


          </ModalCard>
          </Modal>
        </div>

        <div className="login-modal">
          <Modal className={this.state.login}>
            <ModalBackground />
            <ModalCard>
                <ModalCardHeader>
                    <ModalCardTitle></ModalCardTitle>
                    <Delete onClick={this.modalClose} />
                </ModalCardHeader>
            <LoginModal />
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
