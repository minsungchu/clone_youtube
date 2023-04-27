/////////////////////////////////////////////////////
// used in globalRouter
/////////////////////////////////////////////////////
export const join   = (req, res) => res.send("Youtube Clone Join Page");
export const login  = (req, res) => res.send("Youtube Clone Login Page");

/////////////////////////////////////////////////////
// used in userRouter
/////////////////////////////////////////////////////
export const see    = (req, res) => res.send("See User");
export const logout = (req, res) => res.send("Logout User");
export const edit   = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");