import React, { Component } from "react";
import LightBox from "../../components/LightBox";
import API from "../../utils/API";
import { Container, Title, Box, Button, Subtitle, Notification,Delete } from 'bloomer';
import "./Property.css";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { connect } from 'react-redux';

class Property extends Component {
  // Setting our component's initial state
  state = {
    property: [],
    liked: "far fa-heart",
    shared: "copy-url",
  };

    // When the component mounts, load all properties and save them to this.state.properties
    componentDidMount() {
      API.getProperty(this.props.match.params.id)
        .then(res => this.setState({ property: res.data }))
        .catch(err => console.log(err));
    }

    showLiked = () => {
      // const { user } = this.props;
      API.saveLike(this.props.match.params.id)
      .then(res => {
        this.setState({ property: res.data})
      })
      .catch(err => console.log(err));
      this.setState({ liked: "fas fa-heart is-liked" })
      console.log(this.props.match.params.id);
    }
  
    unlike = () => {
      this.setState({ liked: "far fa-heart" })
    }
  
    shareProperty = () => {
      this.state.shared === "copy-url" ? this.setState({shared: "copy-notif"}) : this.setState({shared: "copy-url"});
      setTimeout(() => {
        this.setState({shared: "copy-url"});
      }, 2000);
    }

  render() {
    // const { user } = this.props;
    
    // let mainPic = this.state.property.photos
    // console.log("Main Pic =>", mainPic)
    const mainImage = { backgroundImage: `url(${this.state.property.photos})` }
    return (
      <div className="property">
        <div className="main-image" style={ mainImage }>
          <Container className="property-container image-buttons">
            <div className="buttons-left">
              <LightBox
              property={this.state.property}
              />
            </div>
            <div className="buttons-right">
            <CopyToClipboard text={window.location.href}>
              <Button onClick={this.shareProperty} isColor='white'><p><i className="far fa-share-square"></i>  Share</p></Button>
            </CopyToClipboard>
            <Notification className={this.state.shared} isColor='primary'>
              <Delete onClick={this.shareProperty}/>
              <p>Copied to your clipboard!</p>
              </Notification>
              <Button isColor='white' className="like-button" onClick={this.state.liked === "far fa-heart" ? this.showLiked : this.unlike}><p><i className={this.state.liked}></i> Liked</p></Button>
            </div>
          </Container>
        </div>
        <Container className="property-container">
          <div className="property-header">
            <div className="title-info">
              <span><Title className="property-title">{this.state.property.title}</Title></span>
              <div className="property-overview">
                <span className="property-attribute"><p><i className="fas fa-dollar-sign"></i> {this.state.property.price} Month</p></span>
                <span className="property-attribute"><p><i className="fas fa-bed"></i> {this.state.property.numOfBeds} Bedrooms</p></span>
                <span className="property-attribute"><p><i className="fas fa-bath"></i> {this.state.property.numOfBaths} Bathroom</p></span>
              </div>
            </div>
            <div className="apply-button">
              <Button isColor='primary'><p>Send Application</p></Button>
            </div>
          </div>

          <Box className="description-box">
            <Subtitle isSize={5} className="description-subtitle">About this property</Subtitle>
            <p>
              {this.state.property.description}
              {/* Sunny and bright, 2 bedroom 1 bath Apartment in a great Berkeley 6-plex - Enjoy this cozy 2 Bedroom, 1 Bath Unit in Great 6-plex in Berkeley. Apartment is fully carpeted and newly painted. Kitchen has linoleum flooring, counter top and wood cabinets. Bathroom has linoleum flooring, vanity. This complex is centrally located in Berkeley just a short walk to Ashby BART, Sports Basement and San Pablo Park!! */}
            </p>
          </Box>
          <Subtitle isSize={5} className="description-subtitle">Features</Subtitle>
          <div className="property-features">
            <div className="columns is-multiline">
              <div className="column is-3 property-feature">
                <div className="feature-icon">
                  <i className="fas fa-home"></i>
                </div>
                <div className="feature-text">
                  <Subtitle isSize={6} className="description-subtitle">Type</Subtitle>
                  <p>Single Family</p>
                </div>
              </div>
              <div className="column is-3 property-feature">
                <div className="feature-icon">
                  <i className="fas fa-tshirt"></i>
                </div>
                <div className="feature-text">
                  <Subtitle isSize={6} className="description-subtitle">Laundry</Subtitle>
                  <p>
                    {this.state.property.laundry}
                    {/* In unit */}
                  </p>
                </div>
              </div>
              <div className="column is-3 property-feature">
                <div className="feature-icon">
                  <i className="fas fa-thermometer-half"></i>
                </div>
                <div className="feature-text">
                  <Subtitle isSize={6} className="description-subtitle">Heating</Subtitle>
                  <p>
                    {this.state.property.heating}
                    {/* Central */}
                  </p>
                </div>
              </div>
              <div className="column is-3 property-feature">
                <div className="feature-icon">
                  <i className="fas fa-snowflake"></i>
                </div>
                <div className="feature-text">
                  <Subtitle isSize={6} className="description-subtitle">Cooling</Subtitle>
                  <p>
                    {this.state.property.cooling}
                    {/* Central */}
                  </p>
                </div>
              </div>
              <div className="column is-3 property-feature">
                <div className="feature-icon">
                  <i className="fas fa-paw"></i>
                </div>
                <div className="feature-text">
                  <Subtitle isSize={6} className="description-subtitle">Pets</Subtitle>
                  <p>
                    {this.state.property.pets}
                    {/* Cats, Small dogs */}
                    </p>
                </div>
              </div>
              <div className="column is-3 property-feature">
                <div className="feature-icon">
                  <i className="fas fa-car"></i>
                </div>
                <div className="feature-text">
                  <Subtitle isSize={6} className="description-subtitle">Parking</Subtitle>
                  <p>
                    {this.state.property.parking}
                    {/* Covered */}
                  </p>
                </div>
              </div>

            </div>
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

export default connect(mapStateToProps)(Property)