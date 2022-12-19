import express from "express";
import authController from '../../contoller/authentication'
import {
      getAllUsers,
      createUser
}from '../../contoller/userController';
const router = express.Router();

router
      .get("/",getAllUsers)
      .post("/", createUser)
      
router.post('/signup', authController.signup);
router.post('/login', authController.login);
export default router;