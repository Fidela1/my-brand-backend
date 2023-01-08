import Blog from "../models/post";
import Comment from "../models/comment";
import Like from "../models/likeModel";
import Message from "../models/messageModel";
export const getAllBlogs = (async (req, res) => {
    const blogs = await Blog.find();
    res.send(blogs);
  });
 
    
  export const createBlog = (async (req, res) => {
    const blog = new Blog({
      title: req.body.title,
      description: req.body.description,
      image:req.body.image
    
    });
    await blog.save();
    res.send(blog);
  });
  export const getBlog =  (async (req, res) => {
    try {
      const blog = await Blog.findOne({ _id: req.params.id });
      res.send(blog);
    } catch {
      res.status(404);
      res.send({ error: "blog doesn't exist!" });
    }
  });

  export const updateBlog = (async (req, res) => {
    try {
      const blog = await Blog.findOne({ _id: req.params.id });
  
      if (req.body.title) {
        blog.title = req.body.title;
      }
  
      if (req.body.description) {
        blog.description = req.body.description;
      }
  
      await blog.save();
      res.send(blog);
    } catch {
      res.status(404);
      res.send({ error: "blog doesn't exist!" });
    }
  })

  export const deleteBlog = (async (req, res) => {
	try {
		await Blog.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "blog doesn't exist!" })
	}
})

export const blogComment = (async (req, res) => {
    const comment = new Comment({
      name: req.body.name,
      comment: req.body.comment,
      blogId : req.params.id
    });
    await comment.save();
    res.send(comment);
  })

  export const getComment =  (async (req, res) => {
    try {
      const comment = await Comment.findOne({ _id: req.params.id });
      res.send(comment);
    } catch {
      res.status(404);
      res.send({ error: "comment doesn't exist!" });
    }
  });


  export const bloglikes = (async (req, res) => {
    const like = new Like({
      name: req.body.name,
      likes_count:Math.round(Math.random()),
      blogId : req.params.id
    });
    await like.save();
    res.send(like);
  })
  export const getBlogLike =  (async (req, res) => {
    try {
      const like = await Like.findOne({ _id: req.params.id });
      res.send(like);
    } catch {
      res.status(404);
      res.send({ error: "like doesn't exist!" });
    }
  });

  export const blogmessages = (async (req, res) => {
    const message = new Message({
      name: req.body.name,
      message:req.body.message,
    });
    await message.save();
    res.send(message);
  })
  export const getBlogMessage =  (async (req, res) => {
    try {
      const message = await Message.findOne({ _id: req.params.id });
      res.send(message);
    } catch {
      res.status(404);
      res.send({ error: "message doesn't exist!" });
    }
  });

