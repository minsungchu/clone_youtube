/////////////////////////////////////////////////////
// used in globalRouter
/////////////////////////////////////////////////////
export const join   = (req, res) => {
    return res.send("Youtube Clone Join Page");
}
export const login  = (req, res) => {
    return res.send("Youtube Clone Login Page");
}

/////////////////////////////////////////////////////
// used in userRouter
/////////////////////////////////////////////////////
export const see    = (req, res) => {
    return res.send(`See User, ID : #${req.params.id}`);
}
export const logout = (req, res) => {
    return res.send("Logout User");
}
export const edit   = (req, res) => {
    return res.send("Edit User");
}
export const remove = (req, res) => {
    return res.send("Remove User");
}