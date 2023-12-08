import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema(
  {
    owner: String,
    city: String,
  },
  { collection: "bookmarks" }
);

export default bookmarkSchema;
