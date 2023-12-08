import model from "./model.js";
// export const getCity = (cityName) => model.findOne({ cityID: cityName });
export const searchCities = (cityName) =>
  model.find({
    cityID: { $regex: cityName, $options: "i" },
  });

export const addCity = (city) => model.create(city);

export const deleteCity = (cityId) => model.deleteOne({ cityID: cityId });
