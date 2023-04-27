/////////////////////////////////////////////////////
// used in globalRouter
/////////////////////////////////////////////////////
export const trending   = (req, res) => {
    return res.send("Youtube Clone Homepage - Videos");
}
export const search     = (req, res) => {
    return res.send("Youtube Clone Search Page");
}

/////////////////////////////////////////////////////
// used in videoRouter
/////////////////////////////////////////////////////
export const see        = (req, res) => {
    return res.send(`See Video #${req.params.id}`);
}
export const edit       = (req, res) => {
    return res.send(`Edit Video #${req.params.id}`);
}
export const remove     = (req, res) => {
    return res.send(`Remove Video #${req.params.id}`);
}
export const upload     = (req, res) => {
    return res.send("Upload Video");
}
