import * as dao from "./dao.js";
function BookmarkRoutes(app) {
  const getBookmarksByUser = async (req, res) => {
    const bookmarks = await dao.getBookmarksByUser(req.params.username);
    res.json(bookmarks);
  };

  const checkBookmarkRelationship = async (req, res) => {
    const response = await dao.getBookmarkState(
      req.params.username,
      req.params.location
    );
    var exists = true;
    if (response.length === 0) {
      exists = false;
    }
    res.json(exists);
  };

  const addBookmark = async (req, res) => {
    const response = await dao.addBookmark(
      req.params.username,
      req.params.location
    );
    res.json(response);
  };

  const deleteBookmark = async (req, res) => {
    const response = await dao.deleteBookmark(
      req.params.username,
      req.params.location
    );
    res.json(response);
  };

  app.get("/api/bookmarks/:username", getBookmarksByUser);
  app.get("/api/bookmarks/:username/:location", checkBookmarkRelationship);
  app.post("/api/bookmarks/create/:username/:location", addBookmark);
  app.delete("/api/bookmarks/delete/:username/:location", deleteBookmark);
}
export default BookmarkRoutes;
