import mongoose from "mongoose";
import likeSchema from "./schema.js";
const model = mongoose.model("likes", likeSchema);
export default model;
