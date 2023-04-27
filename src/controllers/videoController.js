/////////////////////////////////////////////////////
// used in globalRouter
/////////////////////////////////////////////////////
export const trending   = (req, res) => res.send("Youtube Clone Homepage - Videos");
export const search     = (req, res) => res.send("Youtube Clone Search Page");

/////////////////////////////////////////////////////
// used in videoRouter
/////////////////////////////////////////////////////
export const see        = (req, res) => res.send("See Video");
export const edit       = (req, res) => res.send("Edit Video");
export const remove     = (req, res) => res.send("Remove Video");
export const upload     = (req, res) => res.send("Upload Video");
