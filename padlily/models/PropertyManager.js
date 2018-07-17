const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let PropertyManagerSchema = new Schema({
  name: {
    type: String,
    required: true
  }, 
  phoneNumber: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  property: [{
    type: Schema.Types.ObjectId,
    ref: "Property"
  }]
});

// This creates our model from the above schema, using mongoose's model method
let PropertyManager = mongoose.model("PropertyManager", PropertyManagerSchema);

// Export the Article model
module.exports = PropertyManager;
