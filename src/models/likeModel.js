import mongoose from'mongoose';
    
const likeSchema = mongoose.Schema({
    name:String,
    likes_count: Number,
    blogId:String
});

module.exports = mongoose.model("like", likeSchema);