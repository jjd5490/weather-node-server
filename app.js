import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import UserRoutes from "./users/routes.js";
import CityListRoutes from "./city-list/routes.js";
import CityRoutes from "./cities/routes.js";
import CommentRoutes from "./comments/routes.js";
import BookmarkRoutes from "./bookmarks/routes.js";
import LikeRoutes from "./likes/routes.js";
import session from "express-session";

const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/weather-app";
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));

app.use(express.json());
UserRoutes(app);
CityListRoutes(app);
CityRoutes(app);
CommentRoutes(app);
BookmarkRoutes(app);
LikeRoutes(app);

app.listen(process.env.PORT || 4000);
