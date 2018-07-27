import axios from "axios";
axios.defaults.withCredentials = true;

export default {
  // Gets all properties
  getProperties: function(queryString) {
    return axios.get("/results" + queryString);
  },
  // Gets the book with the given id
  getProperty: function(id) {
    return axios.get("/property/" + id);
  },
  // Deletes the book with the given id
  deleteProperty: function(id) {
    return axios.delete("/manager/properties/delete" + id);
  },
  // Saves a book to the database
  saveProperty: function(propertyData) {
    console.log("In Axios route")
    return axios.post("/manager/property/create", propertyData) 
  },
  loginUser: function(userData) {
    console.log('we are sssending a POST request to users/login')
    return axios.post("/api/users/login", userData);
  },
  saveUser: function(userData) {
    console.log("Registering Account")
    return axios.post("/api/users/register", userData);
  },
  getAuthenticated: function(isAuthenticated) {
    console.log('Checking if youre logged in Yo')
    return axios.get("/api/users/authenticated", isAuthenticated);
  },
  logout: (cb) => {
    return axios.post('/api/users/logout', cb);
  }
};
