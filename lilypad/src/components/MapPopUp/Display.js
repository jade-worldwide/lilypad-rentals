import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './Display.css';


class Dispbox extends Component {

    render() {
        
return (
    <div className="card">
    <p className="card-header-title">{this.props.text}</p>
    <img src={this.props.image}/>
    </div>
)
    }
};

    export default Dispbox;