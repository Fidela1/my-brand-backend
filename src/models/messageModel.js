import mongoose from "mongoose";

const messageschema = mongoose.Schema({
  name: String,
  message: String,

});

module.exports = mongoose.model("message", messageschema);