// require Express
const express= require("express");

// require Mongoose
const mongoose = require("mongoose");

// require Express EJS Layouts (enable EJS file formatting)
const expressLayouts = require("express-ejs-layouts")

// init express
const app = express();

// setup for static file location
app.use(express.static("public"))

// source layout.ejs
app.use(expressLayouts);

// port config
const PORT = 4000;

// importing routes
const indexRouter = require("./routes/index")
const reviewRouter = require("./routes/reviews")
const authorRouter = require("./routes/authors")

//mounting routes
app.use("/", indexRouter);
app.use("/", reviewRouter);
app.use("/", authorRouter);

// listen to port with callback function
app.listen(PORT, () => console.log(`Running on port ${PORT}`));

// set nodejs to look for EJS files in views
app.set("view engine", "ejs");

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/readinglistMMR",
    {useNewUrlParser: true,
    useUnifiedTopology: true},
    () => {
        console.log("mongoDB connected")
    });