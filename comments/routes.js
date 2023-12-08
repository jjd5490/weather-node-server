import * as dao from "./dao.js";
// let currentUser = null;
function CommentRoutes(app) {
  const retrieveAllComments = async (req, res) => {
    const comments = await dao.getAllComments();
    res.json(comments);
  };

  const retrieveCommentsByUser = async (req, res) => {
    console.log(req.params.author);
    const comments = await dao.findCommentsByAuthor(req.params.author);
    res.json(comments);
  };

  const retrieveCommentsByLocation = async (req, res) => {
    const comments = await dao.findCommentsByLocation(req.params.location);
    res.json(comments);
  };

  const postComment = async (req, res) => {
    console.log(req.body);
    const { city, author, text, time } = req.body;
    const response = await dao.postComment(city, author, text, time);
    res.json(response);
  };

  const getCommentById = async (req, res) => {
    const response = await dao.getCommentById(req.params.cID);
    res.json(response);
  };

  app.get("/api/comments", retrieveAllComments);
  app.get("/api/comments/:cID", getCommentById);
  app.get("/api/comments/author/:author", retrieveCommentsByUser);
  app.get("/api/comments/location/:location", retrieveCommentsByLocation);
  app.post("/api/comments", postComment);
}
export default CommentRoutes;
