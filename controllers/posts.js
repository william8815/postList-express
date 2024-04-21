const handleSuccess = require("../handleSuccess");
const handleError = require("../handleError");
const Post = require("../models/posts");
const PostControllers = {
  getAllPost: async (req, res) => {
    const posts = await Post.find();
    handleSuccess(res, posts);
  },
  createPost: async (req, res) => {
    try {
      const data = req.body;
      const post = await Post.create(data);
      handleSuccess(res, post);
    } catch (error) {
      handleError(res, error);
    }
  },
  deleteAllPost: async (req, res) => {
    const posts = await Post.deleteMany({});
    handleSuccess(res, posts);
  },
  deletePost: async (req, res) => {
    let id = req.params && req.params.id ? req.params.id : null;
    const posts = await Post.findByIdAndDelete(id);
    handleSuccess(res, posts);
  },
  updatePost: async (req, res) => {
    let id = req.params && req.params.id ? req.params.id : null;
    let data = req.body;
    const posts = await Post.findByIdAndUpdate(id, data);
    handleSuccess(res, posts);
  },
};

module.exports = PostControllers;
