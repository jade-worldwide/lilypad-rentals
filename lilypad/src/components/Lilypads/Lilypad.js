import React, { Component } from 'react';
import lilypad from '../../favicon.ico';
import 'bulma/css/bulma.css';
import "./Lilypad.css";

const Dispbox = (props) => (
    <div class="pad">{props.text}
    <img width="15px" src={props.image}/>
    </div>
);

class Toog extends Component {

    state = { isBoxVisible: false };
    handleClick = () => {
        this.setState({
            isBoxVisible: !this.state.isBoxVisible,
        });
    };


      render() {
          console.log(this.state)
          console.log(this.props)
          return (
            <div>
                <img onClick={this.handleClick} width="10px" src={lilypad} /> 
                {this.state.isBoxVisible ? <Dispbox text={this.props.text} image={this.props.image} /> : ''}               
            </div>
          )
      }
    };
    export default Toog;