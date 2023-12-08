import model from "./model.js";
export const getCityList = () => model.find();

export const addCityToList = (cityID) =>
  model.updateOne(
    { _id: "656929d456cc52ebef709ab1" },
    { $push: { list: cityID } }
  );

export const removeCityFromList = (cityID) =>
  model.updateOne(
    { _id: "656929d456cc52ebef709ab1" },
    { $pull: { list: cityID } }
  );
