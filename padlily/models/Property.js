const mongoose = require("mongoose");


let Schema = mongoose.Schema;

let PropertySchema = new Schema({

  title: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  propertySize: {
    type: String,
    required: true
  },
  numOfBeds: {
    type: Number,
    required: true
  },
  numOfBaths: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  pets: {
    type: Boolean,
    default: false 
  },
  parking: {
    type: Boolean,
    default: false
  },
  laundry: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    require: true
  },
  photos: [{
    type: String,
    required: true
  }],
});


let Property = mongoose.model("Property", PropertySchema);


module.exports = Property;
