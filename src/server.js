import express from "express";

/////////////////////////////////////////////////////
// express init
/////////////////////////////////////////////////////
const PORT = 3000;
const app = express();

/////////////////////////////////////////////////////
// express configure
/////////////////////////////////////////////////////
const logger  = (req, res, next) => {
    console.log(`logger > ${req.method} ${req.url}`);
    next();
}
app.use(logger);

const handlerHome = (req, res) => {
    return res.send("Youtube Clone Homepage");
};
app.get("/", handlerHome);

const handleLogin = (req, res) => {
    return res.send("Youtube Clone Login Page");
}
app.get("/login", handleLogin);

/////////////////////////////////////////////////////
// express listen
/////////////////////////////////////////////////////
const handleListening = () => 
    console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);