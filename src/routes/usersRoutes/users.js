import express from "express";
import authController from '../../contoller/authentication';
import validation from "../../validation/userValidation";

import {
      getAllUsers,
      createUser
}from '../../contoller/userController';
const router = express.Router();

const {
      validate
    } = require('../../validation/validatinMiddleware')
router
      .get("/",getAllUsers)
      .post("/", createUser)
router.post('/signup', authController.signup);
router.post('/login', authController.login);
export default router;