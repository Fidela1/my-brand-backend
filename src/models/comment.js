import mongoose from "mongoose";

const commentschema = mongoose.Schema({
  name:  {
    type:String,
    required:true,
  },
  comment:  {
    type:String,
    required:true,
  },
  blogId: {
    type:String,
    required:true,
  }

});

module.exports = mongoose.model("comment", commentschema);