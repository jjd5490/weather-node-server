import * as dao from "./dao.js";
function LikeRoutes(app) {
  const getLikesByComment = async (req, res) => {
    const likes = await dao.getLikesOnComment(req.params.commentID);
    res.json(likes);
  };

  const publishLike = async (req, res) => {
    const response = await dao.publishLike(
      req.params.commentID,
      req.params.userID
    );
    res.json(response);
  };

  // const deleteLike = async (req, res) => {
  //   const response = await dao.deleteLike(
  //     req.params.commentID,
  //     req.params.userID
  //   );
  //   console.log(response);
  //   res.json(response);
  // };

  const deleteLike = async (req, res) => {
    const status = await dao.deleteLike(req.params.likeID);
    res.json(status);
  };

  const getUserLikes = async (req, res) => {
    const response = await dao.getUserLikes(req.params.userID);
    res.json(response);
  };

  app.get("/api/likes/:commentID", getLikesByComment);
  app.post("/api/likes/:commentID/:userID", publishLike);
  app.delete("/api/like/delete/:likeID", deleteLike);
  app.get("/api/likes/user/:userID", getUserLikes);
  // app.delete("/api/likes/delete", deleteLike);
}
export default LikeRoutes;
