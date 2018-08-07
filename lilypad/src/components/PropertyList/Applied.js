import React, { Component } from "react";
import { Label, Input } from 'bloomer';
import 'bulma/css/bulma.css';
import "./PropertyList.css";
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


export class Applied extends Component {
  // Setting our component's initial state


  render() {
    return (
      <div className="property-list">

                          <AccordionItem>
                              <AccordionItemTitle>
                                  <h3>Renter User Name</h3>
                              </AccordionItemTitle>
                              <AccordionItemBody>

                                    <div className="columns">

                                      <div className="column">
                                        <div>
                                          <Label>First Name</Label>
                                              <p>Andrew</p>
                                        </div>

                                        <div>
                                          <Label>Email</Label>
                                              <p>andrew@gmail.com</p>
                                        </div>
                                      </div>

                                      <div className="column">
                                        <div>
                                          <Label>Last Name</Label>
                                              <p>Hemans</p>
                                        </div>

                                          <div>
                                            <Label>Phone Number</Label>
                                                <p>209-867-5309</p>
                                          </div>

                                      </div>

                                    </div>

                                    <div>
                                      <Label>Current Address</Label>
                                          <p>400 Elm Street Stockton CA 95205</p>
                                    </div>



                                    <div className="columns">
                                      <div className="column">

                                        <div>
                                          <Label>Reference Name</Label>
                                              <p>Michael Scott</p>
                                        </div>

                                        <div>
                                          <Label>Reference Name</Label>
                                              <p>Tobias Funke</p>
                                        </div>

                                      </div>

                                      <div className="column">
                                        <div>
                                          <Label>Reference Phone Number</Label>
                                              <p>209-867-5309</p>
                                        </div>

                                        <div>
                                          <Label>Reference Phone Number</Label>
                                              <p>209-555-3241</p>
                                        </div>

                                      </div>
                                    </div>

                                    <div className="columns">
                                      <div className="column">

                                      <div>
                                        <Label>Place of Employment</Label>
                                            <p>Vandelay Indusdtries</p>
                                      </div>
                                      </div>

                                      <div className="column">

                                        <div>
                                          <Label>Workplace Phone Number</Label>
                                              <p>414-555-9786</p>
                                        </div>

                                      </div>

                                      <div className="column">
                                        <Label>Annual Salary</Label>
                                            <p>$120,000</p>
                                      <div>

                                      </div>

                                      </div>

                                    </div>

                                    <div className="columns">
                                      <div className="column">

                                            <Label>Pets</Label>
                                            <p>Dog and Cat</p>
                                      </div>

                                      <div className="column">

                                          <Label>Social Security Number</Label>
                                              
                                              <p>209-33-5555</p>
                                      </div>

                                      <div className="column">

                                          <Label>Driver License</Label>
                                              <p>D4298478</p>
                                      </div>

                                    </div>

                                    <div>
                                      <Label>Additional Notes</Label>
                                      <p>Sunny and bright, 2 bedroom 1 bath Apartment in a great Berkeley 6-plex - Enjoy this cozy 2 Bedroom, 1 Bath Unit in Great 6-plex in Berkeley. Apartment is fully carpeted and newly painted. Kitchen has linoleum flooring, counter top and wood cabinets. Bathroom has linoleum flooring, vanity. This complex is centrally located in Berkeley just a short walk to Ashby BART, Sports Basement and San Pablo Park!!</p>
                                    </div>


                              </AccordionItemBody>
                          </AccordionItem>

      </div>


    );
  }
}
