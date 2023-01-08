import User from "../models/user";
import catchAsync from '../../utils/catchAsync';
export const getAllUsers = catchAsync(async (req, res, next) => {

    const users= await User.find();
    res.send(users);
  });
export const deleteAllUsers = catchAsync(async (req, res, next) => {

    const users= await User.remove()
    res.send(users);
  });