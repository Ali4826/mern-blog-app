import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const port = process.env.PORT || 4000;

const app = express();

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
