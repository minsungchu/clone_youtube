import express from "express";
import morgan from "morgan";

/////////////////////////////////////////////////////
// express init
/////////////////////////////////////////////////////
const PORT = 3000;
const app = express();
const logger = morgan("dev");

/////////////////////////////////////////////////////
// express configure
/////////////////////////////////////////////////////
const handlerHome = (req, res) => {
    return res.send("Youtube Clone Homepage");
};
const handleLogin = (req, res) => {
    return res.send("Youtube Clone Login Page");
}
app.use(logger);
app.get("/", handlerHome);
app.get("/login", handleLogin);

/////////////////////////////////////////////////////
// express listen
/////////////////////////////////////////////////////
const handleListening = () => 
    console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);