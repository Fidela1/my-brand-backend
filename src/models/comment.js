import mongoose from "mongoose";

const commentschema = mongoose.Schema({
  name: String,
  comment: String,
  blogId:String

});

module.exports = mongoose.model("comment", commentschema);