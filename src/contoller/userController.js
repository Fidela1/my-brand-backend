import User from "../models/user";
import catchAsync from '../../utils/catchAsync';
export const getAllUsers = catchAsync(async (req, res, next) => {

    const users= await User.find();
    res.send(users);
  });

  export const createUser = (async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    await user.save();
    res.send(user);
    res.sendStatus(200)
  });