import mongoose from "mongoose";

const schema = mongoose.Schema({
  title: {
    type : String,
    required: [true,'A blog must have title'],
    maxlength: [40, 'A blog title must have less or equal 40 characters'],
    minlength: [2, 'A blog title must have greater or equal  2 characters'],

  },
  description: {
    type:String,
    required:true,
  },

  imagesUrl:{
    type: String,
  

},
});

module.exports = mongoose.model("blog", schema);
