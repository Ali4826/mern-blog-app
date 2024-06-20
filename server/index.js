import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import blogRoutes from "./routes/blogRoutes.js";

dotenv.config();
connectDB();

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());

app.use("/api/blogs", blogRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
