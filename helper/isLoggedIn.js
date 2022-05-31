// Custom middleware for checking if user is logged in
module.exports = (req, res, next) => {
    if(!req.user)
    {
        res.redirect("/auth/login/")
    }
    else {
        next();
    }
}