const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var ruleSchema = new mongoose.Schema(
  {
    title: {
      type: [String], // Define an array of strings
      required: true,
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Rule", ruleSchema);
