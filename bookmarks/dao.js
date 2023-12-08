import model from "./model.js";
// export const getCity = (cityName) => model.findOne({ cityID: cityName });
export const getBookmarksByUser = (username) => model.find({ owner: username });
export const getBookmarkState = (username, location) =>
  model.find({ owner: username, city: location });
export const addBookmark = (username, location) =>
  model.create({ owner: username, city: location });
export const deleteBookmark = (username, location) =>
  model.deleteOne({ owner: username, city: location });
