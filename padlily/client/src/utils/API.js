import axios from "axios";


export default {
  // Gets all properties
  getProperties: function(queryString) {
    return axios.get("/api/properties" + queryString);
  },
  // Gets the book with the given id
  getProperty: function(id) {
    return axios.get("/api/properties/" + id);
  },
  // Deletes the book with the given id
  deleteProperty: function(id) {
    return axios.delete("/api/properties/" + id);
  },
  // Saves a book to the database
  saveProperty: function(propertyData) {
    return axios.post("/api/properties", propertyData) 
  },
  loginUser: function(userData) {
    console.log('we are sssending a POST request to users/login')
    return axios.post("/api/users/login", userData);
  },
  saveUser: function(userData) {
    console.log("Registering Account")
    return axios.post("/api/users/register", userData);
  }
};
