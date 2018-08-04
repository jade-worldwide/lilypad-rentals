import React, { Component } from "react";
import { Field, Control,/* Input, Button,*/ TextArea, /* Select, Label, Container */} from 'bloomer';
import 'bulma/css/bulma.css';
import "./NewPropertyForm.css";
// import ImageUploader from 'react-images-upload';
import API from "../../utils/API";



export class FormPageTwo extends Component {

  state = {
    description: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
};

handleFormSubmit = event => {
  event.preventDefault();
  const { user } = this.props;
  console.log(user)
  if (this.state.description) {
      console.log("Submitting")
      API.saveProperty({
          description: this.state.description,
      })
      .then(res => console.log("submitted"))
      .catch(err => console.log(err));
  } else {
      console.log("Not Submitting")
  }
};

  render() {
    return (
            <div className="form-two">
              <h1 className="title has-text-centered">Describe Your Property</h1>
                <Field>
                  <Control>
                      <TextArea 
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            name="description"
                            placeholder='Description'
                            isSize="medium" />
                  </Control>
                </Field>
            </div>
  );
}
}
