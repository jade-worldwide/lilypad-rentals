import React, { Component } from 'react';
import lilypad from '../../favicon.ico';



class Toog extends Component {

    state = { isBoxVisible: false };
    handleClick = () => {
        this.setState({
            isBoxVisible: !this.state.isBoxVisible,
        });
    };


      render() {
          return (
            <div>
                <img onClick={this.handleClick} width="10px" src={lilypad} /> 
                {this.state.isBoxVisible ? 'visib' : 'invisib'}               
            </div>
          )
      }
    };
    export default Toog;