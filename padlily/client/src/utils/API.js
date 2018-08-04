import axios from "axios";
import url from "url";
import { SSL_OP_NO_QUERY_MTU } from "constants";
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

<<<<<<< HEAD
    if(query) {
=======
    if (query) {
      if(query.city === '' || query.state === ''){
        delete query.city
        delete query.state
      }
      if (query.pets === "Any") {
        delete query.pets

      } if (query.pets) {

        Object.assign(dbQuery, {
          pets: query.pets
        })
      }
>>>>>>> f52a5247a07a9ac958a463a748b77275a9429379
      Object.assign(dbQuery, {
        city: query.city,
        state: query.state,
        price: {
<<<<<<< HEAD
          $lt: query.price
        },
        numOfBeds: {
          $lt: query.numOfBeds
        },
        numOfBaths: {
          $lt: query.numOfBaths
=======
          $gt: query.minPrice,
          $lt: query.maxPrice
        },
        propertySize: {
          $gt: query.minSqFeet,
          $lt: query.maxSqFeet
        },
        numOfBeds: {
          $gt: query.minBeds,
          $lt: query.maxBeds
>>>>>>> f52a5247a07a9ac958a463a748b77275a9429379
        }
      })
    } 
 


    // numOfBeds: {
    //   $gt: query.minBeds,
    //   $lt: query.maxBeds
    // },
    // pets: query.pets
    console.log('dbQuery ->', dbQuery)
    console.log('query ->', query)
    return axios.post(urlPath, { dbQuery })
  },

  // Gets the book with the given id
  getProperty: function (id) {
    return axios.get("/property/" + id);
  },
  // Deletes the book with the given id
  deleteProperty: function (id) {
    return axios.delete("/manager/properties/delete" + id);
  },
  // Saves a book to the database
  saveProperty: function (propertyData) {
    console.log("In Axios route")
    return axios.post("/manager/property/create", propertyData)
  },
<<<<<<< HEAD
  // Saves a book to the database
  saveApplication: function(applicationData) {
    console.log("In Axios route")
    return axios.post("/renter/application/create", applicationData)
  },
  loginUser: function(userData) {
=======
  loginUser: function (userData) {
>>>>>>> f52a5247a07a9ac958a463a748b77275a9429379
    console.log('we are sssending a POST request to users/login')
    return axios.post("/api/users/login", userData);
  },
  saveUser: function (userData) {
    console.log("Registering Account")
    return axios.post("/api/users/register", userData);
  },
  getAuthenticated: function (isAuthenticated) {
    console.log('Checking if youre logged in Yo')
    return axios.get("/api/users/authenticated", isAuthenticated);
  },
  logout: (cb) => {
    return axios.post('/api/users/logout', cb);
  },
  // Gets the book with the given id
  getUser: function (id) {
    return axios.get("/api/users/manager/" + id);
  },
};