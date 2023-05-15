/////////////////////////////////////////////////////
// used in globalRouter
/////////////////////////////////////////////////////
const fakeUser = {
    username : "Boaz",
    loggedIn : true
}
const videos = [
    {
        title: "Javascript",
        rating: 5,
        comments: 2,
        createdAt: "5 minutes ago",
        views: 30,
        id:1
    },
    {
        title: "Python",
        rating: 5,
        comments: 2,
        createdAt: "10 minutes ago",
        views: 20,
        id:2
    },
    {
        title: "C++",
        rating: 5,
        comments: 2,
        createdAt: "15 minutes ago",
        views: 10,
        id:2
    }
]
export const trending   = (req, res) => res.render("home", {pageTitle : "Home", fakeUser, videos});
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
