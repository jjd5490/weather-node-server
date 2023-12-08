import model from "./model.js";
// export const getCity = (cityName) => model.findOne({ cityID: cityName });
export const getLikesOnComment = (commentID) =>
  model.find({ comment_id: commentID });

export const publishLike = (commentID, username) => {
  model.create({ user: username, comment_id: commentID });
};

export const deleteLike = (likeID) => model.deleteOne({ _id: likeID });

export const getUserLikes = (userID) => model.find({ user: userID });
