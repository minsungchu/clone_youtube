/////////////////////////////////////////////////////
// import pakages
/////////////////////////////////////////////////////
import express from "express";

/////////////////////////////////////////////////////
// [express] global router
/////////////////////////////////////////////////////
const globalRouter = express.Router();

const handlerHome = (req, res) => res.send("Youtube Clone Homepage");
globalRouter.get("/", handlerHome);

const handleLogin = (req, res) => res.send("Youtube Clone Login Page");
globalRouter.get("/login", handleLogin);

export default globalRouter;