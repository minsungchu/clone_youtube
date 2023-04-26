import express from "express";

/////////////////////////////////////////////////////
// express init
/////////////////////////////////////////////////////
const PORT = 3000;
const app = express();

/////////////////////////////////////////////////////
// express configure
/////////////////////////////////////////////////////
const handlerHome = (req, res) => {
    console.log("route : ",req.method,req.url);
    return res.send("Youtube Clone Homepage");
};
app.get("/", handlerHome);

const handleLogin = (req, res) => {
    console.log("route : ",req.method,req.url);
    return res.send("Youtube Clone Login Page");
}
app.get("/login", handleLogin);

/////////////////////////////////////////////////////
// express listen
/////////////////////////////////////////////////////
const handleListening = () => 
    console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);