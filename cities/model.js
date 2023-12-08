import mongoose from "mongoose";
import citySchema from "./schema.js";
const model = mongoose.model("cities", citySchema);
export default model;
