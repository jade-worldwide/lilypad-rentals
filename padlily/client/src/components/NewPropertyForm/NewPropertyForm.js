import React, { Component,/* Fragment */ } from "react";
import { Field, Control, Input, Button, TextArea, Select, Label, Container } from 'bloomer';
import { connect } from 'react-redux';
import API from "../../utils/API";
import axios from "axios";
import Geocode from "react-geocode";
// import format from "react-phone-input-auto-format";
import 'bulma/css/bulma.css';
import "./NewPropertyForm.css";
// import { bindActionCreators } from 'redux'
// import getAuthenticated from '../../actions/authActions'


// Cloudinary 
let imageUrl;
let CLOUDINARY_UPLOAD_PRESET = 'nre9efzy'
let CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dkuhmdf7w/upload'

// Geocode
Geocode.setApiKey("AIzaSyDV-7_RPvHNoZ2-f-pM7XLdMMfYnVAMn5M");
Geocode.enableDebug();


class NewPropertyForm extends Component {

    // Setting our component's initial state
    state = {
        property: [],
        title: "",
        address: "",
        city: "",
        state: "",
        latitude: "",
        longitude: "",
        phoneNumber: "",
        propertySize: "",
        propertyType: "",
        numOfBeds: "",
        numOfBaths: "",
        price: "",
        pets: "",
        parking: "",
        laundry: "",
        heating: "",
        cooling: "",
        description: "",
        photos: []

    };


    handleInputChange = event => {

        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        
        // if(this.state.price){
        //     console.log("Hello")
        //     console.log(this.state.price.toLocaleString());
        // }

    };

    handleGeoCoding = event => {

        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

        if (this.state.address && this.state.city) {

            let address = this.state.address
            let city = this.state.city;
            let forMarkers = `"${address}, ${city}"`
            
            Geocode.fromAddress(forMarkers).then(
                response => {
                    const { lat, lng } = response.results[0].geometry.location;
                    console.log(`Lat: ${lat} | Lng: ${lng}`);
                    
                    console.log(response.results[0].formatted_address)
                    this.setState({ latitude: lat, longitude: lng })
                },
                error => {
                    console.error(error);
                }
            );
        }

    }

    formatNumber = event => {

        let { value } = event.target
        let numbers = value.replace(/\D/g, '')
        let char = { 0: '(', 3: ') ', 6: '-' };
        value = '';

        for (var i = 0; i < numbers.length; i++) {
            this.setState({phoneNumber: value += (char[i] || '') + numbers[i]})
        }
    }

    handleImageUpload = event => {

        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

        axios({
            url: CLOUDINARY_URL,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: formData
        }).then(res => {
            imageUrl = res.data.secure_url

            this.setState({ photos: this.state.photos.concat(imageUrl) });
            console.log("Input Changed");
            console.log("URL: ", this.state.photos)

        })
    };

    consoleLogInput = event => {
        const { name, value } = event.target;

        console.log(`${name}: ${value}`)

    }

    handleFormSubmit = event => {
        event.preventDefault();
        const { user } = this.props;
        console.log(user)
        if (this.state.title && this.state.address && this.state.city && this.state.state &&
            this.state.phoneNumber && this.state.numOfBeds && this.state.propertySize && this.state.numOfBaths &&
            this.state.price && this.state.pets && this.state.parking && this.state.laundry &&
            this.state.heating && this.state.cooling && this.state.description && this.state.photos) {
            console.log("Submitting")
            API.saveProperty({
                title: this.state.title,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                phoneNumber: this.state.phoneNumber,
                propertySize: this.state.propertySize,
                propertyType: this.state.propertyType,
                numOfBeds: this.state.numOfBeds,
                numOfBaths: this.state.numOfBaths,
                price: this.state.price,
                pets: this.state.pets,
                parking: this.state.parking,
                laundry: this.state.laundry,
                heating: this.state.heating,
                cooling: this.state.cooling,
                description: this.state.description,
                photos: this.state.photos,
                user
            })
                .then(res => console.log("submitted"))
                .catch(err => console.log(err));
        } else {
            console.log("Not Submitting")
        }
    };

    render() {
        const { user } = this.props;
        return (
            <Container>
                <Field>
                    <Control>
                        <Input
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            onBlur={this.consoleLogInput}
                            name="title"
                            type="Text"
                            placeholder='Title'
                            isSize="medium" />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Input
                            value={this.state.address}
                            onChange={this.handleGeoCoding}
                            onBlur={this.consoleLogInput}
                            name="address"
                            type="Text"
                            placeholder='Address'
                            isSize="medium" />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Input
                            value={this.state.city}
                            onChange={this.handleGeoCoding}
                            onBlur={this.consoleLogInput}
                            name="city"
                            type="Text"
                            placeholder='City'
                            isSize="medium" />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Input
                            value={this.state.state}
                            onChange={this.handleInputChange}
                            onBlur={this.consoleLogInput}
                            name="state"
                            type="Text"
                            placeholder='State'
                            isSize="medium" />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Input
                            value={this.state.phoneNumber}
                            onChange={this.handleInputChange}
                            onKeyUp={this.formatNumber}
                            onBlur={this.consoleLogInput}
                            name="phoneNumber"
                            type="Text"
                            placeholder='Contact Number'
                            isSize="medium" />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Input
                            value={this.state.price}
                            onChange={this.handleInputChange}
                            onBlur={this.consoleLogInput}
                            name="price"
                            type="number"
                            placeholder='Monthly Rent'
                            isSize="medium" />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Input
                            value={this.state.numOfBeds}
                            onChange={this.handleInputChange}
                            onBlur={this.consoleLogInput}
                            name="numOfBeds"
                            type="Number"
                            placeholder='Bedrooms'
                            isSize="medium" />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Input
                            value={this.state.numOfBaths}
                            onChange={this.handleInputChange}
                            onBlur={this.consoleLogInput}
                            name="numOfBaths"
                            type="Number"
                            placeholder='Bathrooms'
                            isSize="medium" />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Input
                            value={this.state.propertySize}
                            onChange={this.handleInputChange}
                            onBlur={this.consoleLogInput}
                            name="propertySize"
                            type="Number"
                            placeholder='Square Feet'
                            isSize="medium" />
                    </Control>
                </Field>

                <Field>
                    <Control>
                        <TextArea
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            onBlur={this.consoleLogInput}
                            name="description"
                            placeholder='Description'
                            isSize="medium" />
                    </Control>
                </Field>

                <Field>
                    <Label>Laundry</Label>
                    <Control>
                        <Select
                            value={this.state.laundry}
                            onChange={this.handleInputChange}
                            onBlur={this.consoleLogInput}
                            name="laundry" >
                            <option>Select</option>
                            <option>In Unit</option>
                            <option>On Premise</option>
                            <option>None</option>
                        </Select>
                    </Control>
                </Field>

                <Field>
                    <Label>Heating</Label>
                    <Control>
                        <Select
                            value={this.state.heating}
                            onChange={this.handleInputChange}
                            onBlur={this.consoleLogInput}
                            name="heating" >
                            <option>Select</option>
                            <option>Central</option>
                            <option>Radiator</option>
                            <option>Wall Heater</option>
                        </Select>
                    </Control>
                </Field>

                <Field>
                    <Label>Cooling</Label>
                    <Control>
                        <Select
                            value={this.state.cooling}
                            onChange={this.handleInputChange}
                            onBlur={this.consoleLogInput}
                            name="cooling" >
                            <option>Select</option>
                            <option>Central</option>
                            <option>Swamp</option>
                            <option>Window Mounted</option>
                            <option>None</option>
                        </Select>
                    </Control>
                </Field>

                <Field>
                    <Label>Pets</Label>
                    <Control>
                        <Select
                            value={this.state.pets}
                            onChange={this.handleInputChange}
                            onBlur={this.consoleLogInput}
                            name="pets" >
                            <option>Select</option>
                            <option>Cat</option>
                            <option>Dog</option>
                            <option>Cat or Dog</option>
                            <option>None</option>
                        </Select>
                    </Control>
                </Field>

                <Field>
                    <Label>Parking</Label>
                    <Control>
                        <Select
                            value={this.state.parking}
                            onChange={this.handleInputChange}
                            onBlur={this.consoleLogInput}
                            name="parking" >
                            <option>Select</option>
                            <option>Covered</option>
                            <option>Space</option>
                            <option>Street</option>
                            <option>None</option>
                        </Select>
                    </Control>
                </Field>

                <Field>
                    <Label>Upload Images</Label>
                    <Control>
                        <Input
                            onChange={this.handleImageUpload}
                            type="file"
                            accept="image/png, image/jpeg"
                            name="file"
                            className="file-upload"
                        />
                    </Control>
                </Field>

                {!user ? (
                    <span>
                        <p className='help is-danger'>You must have an account to post up properties.</p>
                        <Button
                            isColor='primary'
                            className=""
                            disabled='true'
                        >
                            <p>Submit</p>
                        </Button>
                    </span>
                ) :
                    <span>
                        {user.role === 'Renter' ? (<span>
                            <p className='help is-danger'>You must be a property manager to post up a property.</p>
                            <Button
                                isColor='primary'
                                className=""
                                disabled
                            >
                                <p>Submit</p>
                            </Button>
                        </span>
                        ) : (<span>
                            <Button
                                isColor='primary'
                                className=""
                                onClick={this.handleFormSubmit}
                            >
                                <p>Submit</p>
                            </Button>
                        </span>)}
                    </span>
                }
            </Container>
        );
    }
}

const mapStateToProps = ({ auth }) => ({
    user: auth.user
});


export default connect(mapStateToProps)(NewPropertyForm)
