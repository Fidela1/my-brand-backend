import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type: String,
        unique:true,
        lowercase: true,
        // validate:[validator,isEmail, 'Please provide a valid email']
    },
    password: {
        type:String,
        required:  [true,'Please enter password'],
        minlength: 6,
        select:false,

    }
});
UserSchema.pre('save', async function(next) {
    // Only run this function if password was actually modified
    if (!this.isModified('password')) return next();
  
    // Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);
  
    // Delete passwordConfirm field
    this.passwordConfirm = undefined;
    next();
  });
  
  UserSchema.methods.correctPassword = async function(
    candidatePassword, 
    userPassword) {
    return await bcrypt.compare(candidatePassword,userPassword);
  }
 


module.exports = mongoose.model("users", UserSchema);