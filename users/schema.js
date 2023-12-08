import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    email: String,
    lastName: String,
    city: String,
    dob: String,
    role: {
      type: String,
      enum: ["METEOROLOGIST", "ADMIN", "USER"],
      default: "USER",
    },
  },
  { collection: "users" }
);

export default userSchema;
