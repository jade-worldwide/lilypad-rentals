import axios from "axios";
import url from "url";
// axios.defaults.withCredentials = true;

export default {
  // Gets all properties
  getProperties: function (query) {
    const urlPath = url.format({
      protocol: "http",
      hostname: "localhost",
      port: "3000",
      pathname: "/results/"
    })

    const dbQuery = {}

    if(query) {
      Object.assign(dbQuery, {
        city: query.city,
        state: query.state,
        price: {
          $lt: query.price
        },
        numOfBeds: {
          $lt: query.numOfBeds
        },
        numOfBaths: {
          $lt: query.numOfBaths
        }
      })
    } 
 

    console.log('query ->', query)
    return axios.post(urlPath, { dbQuery })
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
  // Saves a book to the database
  saveApplication: function(applicationData) {
    console.log("In Axios route")
    return axios.post("/renter/application/create", applicationData)
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
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/users/manager/" + id);
  },
};