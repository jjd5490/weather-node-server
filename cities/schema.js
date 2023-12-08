import mongoose from "mongoose";

const citySchema = new mongoose.Schema(
  {
    city: String,
    growth_from_2000_to_2013: String,
    latitude: Number,
    longitude: Number,
    population: String,
    rank: String,
    state: String,
    cityID: String,
  },
  { collection: "cities" }
);

export default citySchema;
