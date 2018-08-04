import React, { Component } from "react";
import { RenterApplication } from "../../components/RenterApplication";
import { Container, Button, Modal, ModalCard, ModalCardTitle, ModalBackground, ModalCardFooter, ModalCardHeader, Delete, ModalCardBody } from "bloomer";
import { ResultsList } from "../../components/ResultsList";
import "./Renter.css";
import modal from "./modal-bg.svg";


const modalBG = { backgroundImage: `url(${modal})` }


class Renter extends Component {
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
      <div className="renter">

        <Container>

          <div className="columns">
            <div className="column">
              <h1 className="title">Hi User Name!</h1>

            </div>
            <div className="column user-dash-right">
              <Button isColor='primary' className="" onClick={this.modalOpen}><p>Application</p></Button>
            </div>

          </div>

          <h1 className="title has-text-centered">Liked Properties</h1>
          <ResultsList />

        </Container>


          <div className="application-modal">
            <Modal className={this.state.modal}>
              <ModalCard style={ modalBG } >

                  <ModalCardBody>
                      <Delete onClick={this.modalClose} />
                      <RenterApplication />
                </ModalCardBody>


            </ModalCard>
            </Modal>
          </div>
      </div>
    );
  }
}

export default Renter;
