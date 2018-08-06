import React from "react";
import { Table, /*Image, Subtitle,*/ Button } from 'bloomer';
import 'bulma/css/bulma.css';
import "./PropertyList.css";

export const PropertyList = props => (
  <div className="property-list">
    <Table>
      <thead>
        <tr>
          <th className="address-column">Address</th>
          <th className="rented-column">Rented</th>
          <th className="app-column">Applications</th>
          <th className="delete-column"></th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <p>{props.title}</p>
          </td>
          <td className="rented-column">
            <div class="field">
              <input id="switchExample" type="checkbox" name="switchExample" className="switch" />
            </div>
          </td>
          <td>
            <Button isColor='primary' className="is-small"><p>View {props.applicationNum}</p></Button>

          </td>
          <td>
            <Button className="is-small delete-button"><p><i className="far fa-trash-alt"></i></p></Button>

          </td>
        </tr>

      </tbody>
    </Table>
  </div>


);
