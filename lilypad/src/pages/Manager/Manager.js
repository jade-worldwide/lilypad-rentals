import React, { Component } from "react";
import { NewPropertyForm } from "../../components/NewPropertyForm";
import { PropertyList } from "../../components/PropertyList";
import { Container, Button, Modal, ModalCard, ModalCardTitle, ModalBackground, ModalCardFooter, ModalCardHeader, Delete, ModalCardBody } from 'bloomer';
import StepZilla from "react-stepzilla";
import modal from "./modal-bg.svg";
import "./Manager.css";

const steps =
    [
      {name: 'Step 1', component: <PropertyList /> },
      {name: 'Step 2', component: <NewPropertyForm /> }
    ]

const modalBG = { backgroundImage: `url(${modal})` }

class Manager extends Component {
  // Setting our component's initial state
  state = {
    modal: "",
  };

  modalOpen = () => {
    this.setState({ modal: "is-active" })
  }



  modalClose = () => {
    this.setState({
      modal: "",
      login: "",
     })
  }


  render() {
    return (
      <div className="manager">
        <Container className="manager-container">
          <div className="columns">
            <div className="column">
              <h1 className="title">Hi User Name!</h1>
              <h2 className="sub-title">You currently have 3 properties</h2>
              <h2 className="sub-title">Check out the new applications you received.</h2>
            </div>
            <div className="column user-dash-right">
              <Button isColor='primary' className="" onClick={this.modalOpen}><p>Create Listing</p></Button>

            </div>

          </div>

          <h1 className="title has-text-centered">My Properties</h1>
          <PropertyList />


            <div className="new-property-modal">
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


        </Container>
      </div>
    );
  }
}

export default Manager;
