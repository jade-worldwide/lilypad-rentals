import React, { Component } from "react";
import { Table, Image, Subtitle, Button } from 'bloomer';
import 'bulma/css/bulma.css';
import "./ResultsList.css";

export class ResultsList extends Component {

  state = {
    liked: "far fa-heart",
  };

    showLiked = () => {
      this.setState({ liked: "fas fa-heart is-liked" })
    }

    unlike = () => {
      this.setState({ liked: "far fa-heart" })
    }

    render() {
        return (

          <div className="results-list">



            <Table>
              <tbody>
                  <tr className="results-row">
                      <td className="list-image"><Image isSize="96x96" src="https://via.placeholder.com/96x96" /></td>
                      <td className="results-info">
                      <p className="results-title">Sunny lakeside cottage with beautiful garden.</p>
                      <p className="results-subtitle">$2000 - 2 Bedrooms - 925sqft</p>
                      </td>
                      <td className="list-like">
                        <Button isColor='white' className="like-button" onClick={this.state.liked === "far fa-heart" ? this.showLiked : this.unlike}><p><i className={this.state.liked}></i></p></Button>
                      </td>
                  </tr>
              </tbody>
            </Table>

          </div>

        );
      }
}
