import React from "react";
import { Table, Image, Subtitle } from 'bloomer';
import 'bulma/css/bulma.css';
import "./ResultsList.css";

const ResultsList = () => (

    <Table>
      <tbody>
          <tr>
              <td className="list-image"><Image isSize="96x96" src="https://via.placeholder.com/96x96" /></td>
              <td>
              <Subtitle isSize={4}>Sunny lakeside cottage with beautiful garden.</Subtitle>
              <p>$2000 - 2 Bedrooms - 925sqft</p>
              </td>
          </tr>
          <tr>
              <td className="list-image"><Image isSize="96x96" src="https://via.placeholder.com/96x96" /></td>
              <td>
              <Subtitle isSize={4}>Sunny lakeside cottage with beautiful garden.</Subtitle>
              <p>$2000 - 2 Bedrooms - 925sqft</p>
              </td>
          </tr>
          <tr>
              <td className="list-image"><Image isSize="96x96" src="https://via.placeholder.com/96x96" /></td>
              <td>
              <Subtitle isSize={4}>Sunny lakeside cottage with beautiful garden.</Subtitle>
              <p>$2000 - 2 Bedrooms - 925sqft</p>
              </td>
          </tr>

      </tbody>
    </Table>

);

export default ResultsList;
