const res = require("express/lib/response")


exports.index_get = (req, res) => {
    res.render("home/index.ejs", {welcomeMessage: "Welcome to the Book Nook!"})
}