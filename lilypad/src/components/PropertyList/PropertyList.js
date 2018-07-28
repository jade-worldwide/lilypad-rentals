import React from "react";
import { Table, Image, Subtitle } from 'bloomer';
import 'bulma/css/bulma.css';
import "./PropertyList.css";

export const PropertyList = () => (
  <div className="property-list">
    <Table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Address</th>
          <th>Rented</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
          <tr>
              <td className="list-image"><Image isSize="96x96" src="https://via.placeholder.com/96x96" /></td>
              <td>
                <Subtitle isSize={4}>Sunny lakeside cottage with beautiful garden.</Subtitle>
                <p>123 Rainey Street, Springfield ST, 10090</p>
              </td>
              <td>
                <div class="field">
                  <input id="switchExample" type="checkbox" name="switchExample" className="switch" />
                </div>
              </td>
              <td>
                Delete
              </td>
          </tr>
      </tbody>
    </Table>
  </div>


);
