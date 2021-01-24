var mongoose = require("mongoose");

const User = mongoose.Schema({
  name: {
    type: String,
  },
  age: { type: Number },
  phoneNumber: { type: String },
});
module.exports = mongoose.model("Cluster0", User);
