import axios from "axios";

export default {
  // Gets all properties
  getProperties: function() {
    return axios.get("/api/Properties");
  }
};