/////////////////////////////////////////////////////
// import pakages
/////////////////////////////////////////////////////
import express from "express";

/////////////////////////////////////////////////////
// [express] videos router
/////////////////////////////////////////////////////
const videosRouter = express.Router();
const handlerWatchVideo = (req, res) => res.send("Watch Video");
videosRouter.get("/watch", handlerWatchVideo);

export default videosRouter;