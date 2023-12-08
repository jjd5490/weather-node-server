import mongoose from "mongoose";

const cityListSchema = new mongoose.Schema(
  {
    list: [String],
  },
  { collection: "citylist" }
);

export default cityListSchema;
