const Post = require("../models/Post");

const postController = {
  
  createPost: async (req, res) => {
    try {
      const { postTitle, postDesc, postImage, UID } = req.body;
      const newPost = new Post({ postTitle, postDesc, postImage, UID });
      const savedPost = await newPost.save();
      
      res.status(201).json(savedPost);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  
  getAllPosts: async (res) => {
    try {
      const posts = await Post.find()
        .populate("UID", "firstName lastName emailId")
        .populate("comments.UID", "firstName lastName");
        
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  
  addComment: async (req, res) => {
    try {
      const { postId } = req.params;
      const { UID, commentDesc } = req.body;

      const updatedPost = await Post.findByIdAndUpdate(
        postId,
        { $push: { comments: { UID, commentDesc } } },
        { new: true, runValidators: true }
      ).populate("comments.UID", "firstName lastName");

      if (!updatedPost) {
        return res.status(404).json({ message: "Post not found" });
      }

      res.status(201).json(updatedPost.comments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = postController;