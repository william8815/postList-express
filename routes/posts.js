const express = require("express");
const router = express.Router();
const PostControllers = require("../controllers/posts");
// 取得所有 post
router.get("/", PostControllers.getAllPost);
// 新增 post
router.post("/", PostControllers.createPost);
// 刪除所有 post
router.delete("/", PostControllers.deleteAllPost);
// 刪除指定 post
router.delete("/:id", PostControllers.deletePost);
// 更新指定 post
router.patch("/:id", PostControllers.updatePost);

module.exports = router;
