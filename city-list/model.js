import mongoose from "mongoose";
import cityListSchema from "./schema.js";
const model = mongoose.model("citylist", cityListSchema);
export default model;
