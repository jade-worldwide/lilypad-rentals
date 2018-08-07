import React, { Component } from "react";
import { ResultsList, Filters } from "../../components/ResultsList";
import { Table, Image, Subtitle, Button, Field, Label, Control, Checkbox } from 'bloomer';
import { GoogleMap } from "../../components/GoogleMap";
import { Slider, Switch, Tooltip } from 'antd';
import 'antd/lib/slider/style/index.css';
import 'antd/lib/tooltip/style/index.css';
import "./Results.css";


class Results extends Component {


// Setting our component's initial state
state = {
  show: "columns results-columns",
};

  filtersShow = () => {
    this.setState({ show: "columns results-columns filters-margin" })
  }

  filtersHide = () => {
    this.setState({ show: "columns results-columns" })
  }


  render() {
    return (
      <div className="results">
        <div className="filters">
          <Field>
            <Label>Bedrooms</Label>
            <Control>
              <Slider range defaultValue={[0, 3]} min={0} max={10}/>
              <div className="slider-output">
                <p>Min: 0</p>
                <p className="max">Max: 10</p>
              </div>
            </Control>
          </Field>
          <Field>
            <Label>Bathrooms</Label>
            <Control>
              <Slider range defaultValue={[0, 3]} min={0} max={10}/>
              <div className="slider-output">
                <p>Min: 0</p>
                <p className="max">Max: 10</p>
              </div>
            </Control>
          </Field>
          <Field>
            <Label>Max Price</Label>
            <Control>
              <Slider range defaultValue={[0, 10000]} min={0} max={10000}/>
              <div className="slider-output">
                <p>Min: 0</p>
                <p className="max">Max: 10</p>
              </div>
            </Control>
          </Field>
          <Field>
            <Label>Pets</Label>
            <Control>
                <Checkbox> Cats</Checkbox>
            </Control>
            <Control>
                <Checkbox> Dogs</Checkbox>
            </Control>
          </Field>



            <Button isColor='primary' className="apply-filters"><p>Apply</p></Button>
        </div>
        <div className={this.state.show}>
          <div className="column results-column list-column">
            <div className="filter-header">
              <Button isColor='primary' className="show-filters" onClick={this.state.show === "columns results-columns" ? this.filtersShow : this.filtersHide}><p>Filters</p></Button>
            </div>
            <div className="result-list">
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
            </div>
          </div>
          <div className="column results-column">
            <GoogleMap />
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
