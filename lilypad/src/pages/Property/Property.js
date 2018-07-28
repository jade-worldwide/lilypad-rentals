import React, { Component } from "react";
import LightBox from "../../components/LightBox";
import { Container, Title, Box, Button, Subtitle } from 'bloomer';
import house from './house.jpg';
import "./Property.css";

const mainImage = { backgroundImage: `url(${house})` }

class Property extends Component {
  // Setting our component's initial state
  state = {
    liked: "far fa-heart"
  };

  likeProperty = (props) => {
    const isLiked = props.isLiked;
    if (isLiked) {
      this.setState({ liked: "far fa-heart" })
    } else {
      this.setState({ liked: "fas fa-heart is-liked" })

    }
  }


  render() {
    return (
      <div className="property">
        <div className="main-image" style={ mainImage }>
          <Container className="property-container image-buttons">
            <div className="buttons-left">
              <LightBox />
            </div>
            <div className="buttons-right">
              <Button isColor='white'><p><i className="far fa-share-square"></i>  Share</p></Button>
              <Button isColor='white' className="like-button" isLiked={false} onClick={this.likeProperty}><p><i className={this.state.liked}></i>  Like</p></Button>
            </div>
          </Container>
        </div>
        <Container className="property-container">
          <div className="property-header">
            <div className="title-info">
              <Title className="property-title">Sunny Cottage by the Lake</Title>
              <div className="property-overview">
                <span className="property-attribute"><p><i className="far fa-dollar-sign"></i> 2000 Month</p></span>
                <span className="property-attribute"><p><i className="far fa-bed"></i> 2 Bedrooms</p></span>
                <span className="property-attribute"><p><i className="far fa-bath"></i> 1 Bathroom</p></span>
              </div>
            </div>
            <div className="apply-button">
              <Button isColor='primary'><p>Send Application</p></Button>
            </div>
          </div>

          <Box className="description-box">
            <Subtitle isSize={5} className="description-subtitle">About this property</Subtitle>
            <p>
              Sunny and bright, 2 bedroom 1 bath Apartment in a great Berkeley 6-plex - Enjoy this cozy 2 Bedroom, 1 Bath Unit in Great 6-plex in Berkeley. Apartment is fully carpeted and newly painted. Kitchen has linoleum flooring, counter top and wood cabinets. Bathroom has linoleum flooring, vanity. This complex is centrally located in Berkeley just a short walk to Ashby BART, Sports Basement and San Pablo Park!!
            </p>
          </Box>
          <Subtitle isSize={5} className="description-subtitle">Features</Subtitle>
          <div className="property-features">
            <div className="columns is-multiline">
              <div className="column is-3 property-feature">
                <div className="feature-icon">
                  <i className="far fa-home"></i>
                </div>
                <div className="feature-text">
                  <Subtitle isSize={6} className="description-subtitle">Type</Subtitle>
                  <p>Single Family</p>
                </div>
              </div>
              <div className="column is-3 property-feature">
                <div className="feature-icon">
                  <i className="far fa-tshirt"></i>
                </div>
                <div className="feature-text">
                  <Subtitle isSize={6} className="description-subtitle">Laundry</Subtitle>
                  <p>In unit</p>
                </div>
              </div>
              <div className="column is-3 property-feature">
                <div className="feature-icon">
                  <i className="far fa-thermometer-half"></i>
                </div>
                <div className="feature-text">
                  <Subtitle isSize={6} className="description-subtitle">Heating</Subtitle>
                  <p>Central</p>
                </div>
              </div>
              <div className="column is-3 property-feature">
                <div className="feature-icon">
                  <i className="far fa-snowflake"></i>
                </div>
                <div className="feature-text">
                  <Subtitle isSize={6} className="description-subtitle">Cooling</Subtitle>
                  <p>Central</p>
                </div>
              </div>
              <div className="column is-3 property-feature">
                <div className="feature-icon">
                  <i className="far fa-paw"></i>
                </div>
                <div className="feature-text">
                  <Subtitle isSize={6} className="description-subtitle">Pets</Subtitle>
                  <p>Cats, Small dogs</p>
                </div>
              </div>
              <div className="column is-3 property-feature">
                <div className="feature-icon">
                  <i className="far fa-car"></i>
                </div>
                <div className="feature-text">
                  <Subtitle isSize={6} className="description-subtitle">Parking</Subtitle>
                  <p>Covered</p>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Property;
