/////////////////////////////////////////////////////
// used in globalRouter
/////////////////////////////////////////////////////
const fakeUser = {
    username : "Boaz",
    loggedIn : true
}
export const trending   = (req, res) => res.render("home", {pageTitle : "Home", fakeUser});
export const search     = (req, res) => {
    return res.send("Youtube Clone Search Page");
}

/////////////////////////////////////////////////////
// used in videoRouter
/////////////////////////////////////////////////////
export const see        = (req, res) => res.render("video_watch", {pageTitle : "Watch Video", id : req.params.id});
export const edit       = (req, res) => res.render("video_edit", {pageTitle : "Edit Video", id : req.params.id});
export const remove     = (req, res) => {
    return res.send(`Remove Video #${req.params.id}`);
}
export const upload     = (req, res) => {
    return res.send("Upload Video");
}
