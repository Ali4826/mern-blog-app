import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
