import Blog from "../models/post";
import Comment from "../models/comment";
import Like from "../models/likeModel";
import Message from "../models/messageModel";
export const getAllBlogs = (async (req, res) => {
    const newBlog = await Blog.find();

    res.json({
      status: 'success',
      statusCode:200,
      data: {
          blog: newBlog
      }
  });
  });
 
    
  export const createBlog = (async (req, res) => {
    const newBlog = new Blog({
      title: req.body.title,
      description: req.body.description,
    
    });
    await newBlog.save();
    res.json({
      status: 'success',
      statusCode:201,
      data: {
          blog: newBlog
      }
  });

  });
  
  export const getBlog =  (async (req, res) => {
    try {
      const newBlog = await Blog.findOne({ _id: req.params.id });

      res.json({
        status: 'success',
        statusCode:200,
        data: {
            blog: newBlog
        }
    });
    } catch {
      res.status(404);
      res.send({ error: "blog doesn't exist!" });
    }
  });

  export const updateBlog = (async (req, res) => {
    try {
      const newBlog = await Blog.findOne({ _id: req.params.id });
      if (req.body.title) {
        newBlog.title = req.body.title;
      }
  
      if (req.body.description) {
        newBlog.description = req.body.description;
      }
  
      await newBlog.save();
      res.json({
        status: 'success',
        statusCode:200,
        data: {
            blog: newBlog
        }
    });
    } catch {
      res.status(404);
      res.send({ error: "blog doesn't exist!" });
    }
  })

  export const deleteBlog = (async (req, res) => {
	try {
		await Blog.deleteOne({ _id: req.params.id })
		res.json({
      status: 'blog is deleted',
      statusCode:200,
  });
	} catch {
		res.status(404)
		res.send({ error: "blog doesn't exist!" })
	}
})

export const blogComment = (async (req, res) => {
    const newComment = new Comment({
      name: req.body.name,
      comment: req.body.comment,
      blogId : req.params.id
    });
    await newComment.save();
   
    res.json({
      status: 'success',
      statusCode:201,
      data: {
          comment: newComment
      }
  });
  })

  export const getComment =  (async (req, res) => {
    try {
      const newComment = await Comment.findOne({ _id: req.params.id });
      res.json({
        status: 'success',
        statusCode:200,
        data: {
            comment: newComment
        }
    });
    } catch {
      res.status(404);
      res.send({ error: "comment doesn't exist!" });
    }
  });


  export const bloglikes = (async (req, res) => {
    const newLike = new Like({
      name: req.body.name,
      likes_count:Math.round(Math.random()),
      blogId : req.params.id
    });
    await newLike.save();
    res.json({
      status: 'success',
      statusCode:200,
      data: {
        like: newLike
    }
  });
  })
  export const getBlogLike =  (async (req, res) => {
    try {
      const newLike = await Like.findOne({ _id: req.params.id });
      res.json({
        status: 'success',
        statusCode:200,
        data: {
          like: newLike
      }
    });
    } catch {
      res.status(404);
      res.send({ error: "like doesn't exist!" });
    }
  });

  export const blogmessages = (async (req, res) => {
    const newMessage = new Message({
      name: req.body.name,
      message:req.body.message,
    });
    await newMessage.save();
    res.json({
      status: 'success',
      statusCode:201,
      data: {
          comment: newMessage
      }
  });
  })
  export const getBlogMessage =  (async (req, res) => {
    try {
      const newMessage = await Message.findOne({ _id: req.params.id });
      res.json({
        status: 'success',
        statusCode:200,
        data: {
            comment: newMessage
        }
    });
    } catch {
      res.status(404);
      res.send({ error: "message doesn't exist!" });
    }
  });


  