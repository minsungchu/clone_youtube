/////////////////////////////////////////////////////
// used in globalRouter
/////////////////////////////////////////////////////
export const trending   = (req, res) => res.render("home");
export const search     = (req, res) => {
    return res.send("Youtube Clone Search Page");
}

/////////////////////////////////////////////////////
// used in videoRouter
/////////////////////////////////////////////////////
export const see        = (req, res) => res.render("video_watch");
export const edit       = (req, res) => res.render("video_edit");
export const remove     = (req, res) => {
    return res.send(`Remove Video #${req.params.id}`);
}
export const upload     = (req, res) => {
    return res.send("Upload Video");
}
