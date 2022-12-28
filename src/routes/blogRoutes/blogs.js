import express from "express";
const validation = require('../../validation/blogValidation')


import {
  getAllBlogs,
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
  blogComment,
  getComment,
  bloglikes,
  getBlogLike,
  blogmessages,
  getBlogMessage
} from '../../contoller/blogs';

import { get } from "mongoose";

const router = express.Router();
const {
      validate
    } = require('../../validation/validatinMiddleware')
    
router
      .get("/", getAllBlogs)
      .post("/" , validate(validation.person),createBlog)
      .get("/:id",getBlog)
      .patch("/:id",updateBlog )
      .delete("/:id", deleteBlog)

router

      .post("/:id/comments",blogComment)
      .get("/:id/comments", getComment)

router

      .post("/:id/likes",bloglikes)
      .get("/:id/likes", getBlogLike)

  router

      .post("/:id/messages",blogmessages)
      .get("/:id/messages", getBlogMessage)

      
export default router;