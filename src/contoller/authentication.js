import User from './../models/user';
import catchAsync from '../../utils/catchAsync';
import AppError from '../../utils/appError';
const jwt = require('jsonwebtoken');

const signToken = id => {
    return jwt.sign({id},  process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
});
}
exports.signup = catchAsync(async (req, res, next) => {
const newUser = await User.create(req.body);

const token = signToken(newUser._id)

    res.status(201).json({
        status: 'success',
        token,
        data: {
            user: newUser
        }
    });
});

exports.login =catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    
//     // check if email and password exist
    if (!email || !password) {
        return  next(new AppError('please provide email and password!', 400));
    
}
// check if user exists && password is correct

const user = await User.findOne({email}).select('+password')

if(!user || !await user.correctPassword(password, user.password)){
            return next(new AppError('incorrect email or password!', 401));
        }

        // if everything ok,send token to client
const token = signToken(user._id);
    res.status(200).json({
        status: 'success',
        token
    });
});
//       
//     }
//    
//     

//     
//     
//     

// exports.protect = catchAsync(async(req, res, next) => {
//     let token;
//  // Getting the token and check if it's exist
// if(
//     req.headers.authorization.startsWith('Bearer')) {
//      token = req.headers.authorization.split(' ')[1];
// }
// console.log(token)

// if(!token) {
//     return next(new AppError('You are not logged in! please login to get access.'))
// }
//  // Verification token
 
//  // Check if user still exist

//  // check if changed password after the token issued
//     next();
// });