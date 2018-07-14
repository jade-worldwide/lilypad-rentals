const mongoose = require("mongoose");


let Schema = mongoose.Schema;

let ApplicationSchema = new Schema({

  name: {
    type: String,
    required: true
  },
  currentAdress: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
      type: Number,
      require: true
  },
  references: {
    type: String,
    required: true
  },
  income: {
    type: Number,
    required: true
  },
  pets: {
    type: Boolean,
    default: false 
  },
  laundry: {
    type: Boolean,
    default: false
  }
});


let Property = mongoose.model("Application", ApplicationSchema);


module.exports = Application;
