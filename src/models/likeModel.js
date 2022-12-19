import mongoose from'mongoose';
    
const likeSchema = mongoose.Schema({
    likes_count: Number,
    name: String,
    blogId:String
});

module.exports = mongoose.model("like", likeSchema);