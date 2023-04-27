/////////////////////////////////////////////////////
// import pakages
/////////////////////////////////////////////////////
import express from "express";
import { trending, search } from "../controllers/videoController";
import { join, login } from "../controllers/userController";

/////////////////////////////////////////////////////
// [express] global router
/////////////////////////////////////////////////////
const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;