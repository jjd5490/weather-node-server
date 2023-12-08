import model from "./model.js";
export const getAllComments = () => model.find();
export const findCommentsByAuthor = (username) =>
  model.find({ author: username });
export const findCommentsByLocation = (cityID) => model.find({ city: cityID });
export const postComment = (city, author, text, time) =>
  model.create({
    city: city,
    author: author,
    text: text,
    time: time,
  });

export const getCommentById = (cID) => model.findOne({ _id: cID });
// export const createUser = (user) => model.create(user);
// export const findAllUsers = () => model.find();
// export const findUserById = (userId) => model.findById(userId);
// export const findUserByUsername = (username) =>
//   model.findOne({ username: username });
// export const findUserByCredentials = (username, password) =>
//   model.findOne({ username, password });
// export const updateUser = (userId, user) =>
//   model.updateOne({ _id: userId }, { $set: user });
// export const deleteUser = (userId) => model.deleteOne({ _id: userId });
