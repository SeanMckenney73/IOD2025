const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");


router.post("/", (req, res) => {
  postController.createPost(req, res);
});

router.get("/", (req, res) => {
  postController.getAllPosts(res); 
});


router.post("/:postId/comments", (req, res) => {
  postController.addComment(req, res);
});

module.exports = router;