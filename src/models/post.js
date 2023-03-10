import mongoose from "mongoose";
const schema = mongoose.Schema({
  title: {
    type : String,
  },
  description: {
    type:String,
    required:true,
  },
  blog_image:{
    type:String,
  }, 
});

module.exports = mongoose.model("blog", schema);
