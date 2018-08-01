import React, { Component } from "react";
import {/* NewPropertyForm,*/ FormPageOne, FormPageTwo, FormPageThree, FormPageFour } from "../../components/NewPropertyForm";
import { PropertyList, /*Filters*/ } from "../../components/PropertyList";
import { Container, Button, Modal, ModalCard, ModalBackground, /*ModalCardFooter, ModalCardHeader,*/ Delete, ModalCardBody } from 'bloomer';
import StepZilla from "react-stepzilla";
import modal from "./modal-bg.svg";
import "./Manager.css";
// import { login } from '../../actions/authActions'
import API from "../../utils/API";

import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'
import { Link } from "react-router-dom";

const steps =
  [
    { name: 'Step 1', component: <FormPageOne /> },
    { name: 'Step 2', component: <FormPageTwo /> },
    { name: 'Step 3', component: <FormPageThree /> },
    { name: 'Step 4', component: <FormPageFour /> }
  ]

const modalBG = { backgroundImage: `url(${modal})` }

export class Manager extends Component {
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
    console.log(this.state.properties)
    return (
      <div className="manager">
        <Container className="manager-container">
          <div className="columns">
            <div className="column">
              <h1 className="title">Hi {this.state.user.name}</h1>
              <h2 className="sub-title">You currently have {this.state.propertyNum} properties</h2>
              <h2 className="sub-title">Check out the new applications you received.</h2>
            </div>
            <div className="column user-dash-right">
              <Button
                isColor='primary'
                className=""
                onClick={this.modalOpen}><p>Create Listing</p></Button>

            </div>

          </div>

          <h1 className="title has-text-centered">My Properties</h1>
          <div>
            {this.state.properties.map(properties => (
                <Link to={"/property/" + properties._id}>
                <PropertyList
                  title={properties.title}
                />
              </Link>
            ))}
          </div>

          <div className="new-property-modal">
            <Modal className={this.state.modal}>

              <ModalBackground />
              <ModalCard style={modalBG} >

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

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
  authError: auth.authError
});

export default connect(mapStateToProps)(Manager)
