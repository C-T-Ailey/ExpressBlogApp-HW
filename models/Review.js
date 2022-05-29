const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    title: String,
    author: String,
    year: Number,
    isRead: Boolean,
    comments: String,
    cover: String
},{
    timestamps: true
});




const Review = mongoose.model("Review", reviewSchema);


module.exports = Review;