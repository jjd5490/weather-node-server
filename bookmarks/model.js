import mongoose from "mongoose";
import bookmarkSchema from "./schema.js";
const model = mongoose.model("bookmarks", bookmarkSchema);
export default model;
