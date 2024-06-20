import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    blog: { type: String, required: true },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;