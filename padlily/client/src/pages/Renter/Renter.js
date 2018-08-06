import React, { Component } from "react";
import RenterApplication from "../../components/RenterApplication/RenterApplication";
import { Container, Button, Modal, ModalCard, Delete, ModalCardBody } from "bloomer";
import { ResultsList } from "../../components/ResultsList";
import "./Renter.css";
import modal from "./modal-bg.svg";
import API from "../../utils/API";

const modalBG = { backgroundImage: `url(${modal})` }


class Renter extends Component {
  // Setting our component's initial state
  state = {
    modal: "",
    user: {},
    properties: [],
    propertyNum: [],
    propertyId: '',
    title: "Peter Panda"
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

  componentDidMount() {
    this.loadUser();
    // this.loadProperties();
  }

  loadUser = () => {
    API.getUser(this.props.match.params.id)
      .then(res => {
        this.setState({ user: res.data, propertyNum: res.data.property.length, propertyId: res.data.property })
        let userProp = (res.data.property)
        for (let peterPanda of userProp) {
          console.log("Property ID: ", peterPanda)
          API.getProperty(peterPanda)
            .then(res =>
              this.setState({ properties: this.state.properties.concat(res.data) })
            )
        }
      })

      .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="renter">

        <Container>

          <div className="columns">
            <div className="column">
              <h1 className="title">Hi {this.state.user.name}!</h1>

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
