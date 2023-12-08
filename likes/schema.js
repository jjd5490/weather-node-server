import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
  {
    user: String,
    comment_id: String,
  },
  { collection: "likes" }
);

export default likeSchema;
