/////////////////////////////////////////////////////
// import pakages
/////////////////////////////////////////////////////
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

/////////////////////////////////////////////////////
// express init
/////////////////////////////////////////////////////
const PORT = 3000;
const app = express();
const logger = morgan("dev");

/////////////////////////////////////////////////////
// [express] configure router
/////////////////////////////////////////////////////
app.set('view engine', 'pug');
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

/////////////////////////////////////////////////////
// [express] listen
/////////////////////////////////////////////////////
const handleListening = () => 
    console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);