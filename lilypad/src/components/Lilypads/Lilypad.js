import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import "./Lilypad.css";
import Dispbox from '../MapPopUp/Display.js'


class Marker extends Component {
    // constructor(){
    //     super()
    //     this.state = {isBoxVisible: false},
    //     this.handleClick = this.handleClick.bind(this)

    // }
    // state = { 
    //     isBoxVisible: false
    //  };
     
    // handleClick = () => {
    //     this.setState({
    //         isBoxVisible: !this.state.isBoxVisible,
    //     });
    // };


    render() {
    //   console.log(this.state)
        return (
            <div className="lily" onClick={this.props.onClick}>
                {/* Replace src={lilypad} with whatever icon that you want */}
                <img width="20px" src={this.props.image} /> 
                {
                    this.props.isBoxVisible ? (
                        <Dispbox 
                            text={this.props.text}
                            image={this.props.image}
                            className="card"
                            link={this.props.link}
                        ></Dispbox>
                    ) : 'lol'
                }
            </div>
        );
    }
};
export default Marker;