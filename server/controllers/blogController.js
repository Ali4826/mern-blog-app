import Blog from "../models/blogModel.js";

// @desc    Get blogs
// @route   GET /api/blogs
// @access  Public
export const getBlogs = async (req, res) => {
  const blogs = await Blog.find();
  res.status(200).json(blogs);
};

// @desc    Get blog
// @route   GET /api/blogs/:id
// @access  Public
export const getBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.status(200).json(blog);
};

// @desc    Set blogs
// @route   POST /api/blogs
// @access  Public
export const postBlog = async (req, res) => {
  const { title, name, description } = req.body;
  const newBlog = await Blog.create({ title, name, description });
  res.status(201).json(newBlog);
};

// @desc    Update blog
// @route   PUT /api/blogs/:id
// @access  Public
export const updateBlog = async (req, res) => {
  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedBlog);
};

// @desc    Delete blog
// @route   DELETE /api/blogs/:id
// @access  Public
export const delBlog = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.status(200).json({ id: req.params.id });
};
