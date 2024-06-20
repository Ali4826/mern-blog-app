import express from "express";
import {
  getBlogs,
  postBlog,
  updateBlog,
  delBlog,
} from "../controllers/blogController.js";

const router = express.Router();

router.route("/").get(getBlogs).post(postBlog);
router.route("/:id").put(updateBlog).delete(delBlog);

export default router;
