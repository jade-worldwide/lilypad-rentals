const mongoose = require("mongoose");


let Schema = mongoose.Schema;

let ApplicationSchema = new Schema({

  name: {
    type: String,
    required: true
  },
  emailAddress: {
    type: String,
    required: true
  },
  phoneNumber: {
      type: Number,
      require: true
  },
  currentAdress: {
    type: String,
    required: true
  },
  referenceName1: {
    type: String,
    required: true
  },
  referencePhoneNumber1: {
    type: Number,
    required: true
  },
  referenceName2: {
    type: String,
    required: true
  },
  referencePhoneNumber2: {
    type: Number,
    required: true
  },
  currentEmployment: {
    type: String,
    required: true
  },
  employmentPhoneNumber: {
    type: Number,
    required: true
  },
  income: {
    type: Number,
    required: true
  },
  pets: {
    type: String,
  },
  socialNumber: {
    type: Number,
    required: true
  },
  driverNumber: {
    type: String,
    required: true
  },
  additionalNotes: {
    type: String
  }
});


let Application = mongoose.model("Application", ApplicationSchema);


module.exports = Application;
