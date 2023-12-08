import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    city: String,
    author: String,
    text: String,
    time: String,
  },
  { collection: "comments" }
);

export default commentSchema;
