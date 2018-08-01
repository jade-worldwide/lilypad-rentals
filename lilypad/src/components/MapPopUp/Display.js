import React, { Component } from 'react';
import { Image } from 'bloomer';
import 'bulma/css/bulma.css';
import './Display.css';


class Dispbox extends Component {

    render() {

      return (
          <div className="card">
            <div className="card-image">
              <Image isRatio="2:1" src={this.props.image} />
            </div>
            <div className="card-info">
              <p className="card-header-title">{this.props.text}</p>
            </div>
          </div>
      )
    }
};

    export default Dispbox;
