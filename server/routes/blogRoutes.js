import express from "express";
import {
  getBlogs,
  postBlog,
  updateBlog,
  delBlog,
  getBlog,
} from "../controllers/blogController.js";

const router = express.Router();

router.route("/").get(getBlogs).post(postBlog);
router.route("/:id").get(getBlog).put(updateBlog).delete(delBlog);

export default router;
