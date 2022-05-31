// require Express
const express= require("express");

// require Mongoose
const mongoose = require("mongoose");

// require dotenv configs
require("dotenv").config()

// require Express EJS Layouts (enable EJS file formatting)
const expressLayouts = require("express-ejs-layouts")

// require connect flash
const flash = require("connect-flash")

// init express
const app = express();

// setup for static file location
app.use(express.static("public"))

// source layout.ejs
app.use(expressLayouts);

// port config
const PORT = process.env.PORT;

let session = require("express-session");
let passport = require("./helper/ppConfig");

//init flash to display messages
app.use(flash());

//session configs
app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 3600000}
}))

//Initialize Session and Passport
app.use(passport.initialize());
app.use(passport.session());

// Sharing information with all pages??
app.use(function(req, res, next){
    res.locals.alerts = req.flash();
    res.locals.currentUser = req.user;
    next();
})

// importing routes
const indexRouter = require("./routes/index")
const reviewRouter = require("./routes/reviews")
const authorRouter = require("./routes/authors")
const authRouter = require("./routes/auth")

//mounting routes
app.use("/", indexRouter);
app.use("/", reviewRouter);
app.use("/", authorRouter);
app.use("/", authRouter)

// listen to port with callback function
app.listen(PORT, () => console.log(`Running on port ${PORT}`));

// set nodejs to look for EJS files in views
app.set("view engine", "ejs");

// MongoDB connection
mongoose.connect(process.env.mongoDBURL,
    {useNewUrlParser: true,
    useUnifiedTopology: true},
    () => {
        console.log("mongoDB connected")
    });