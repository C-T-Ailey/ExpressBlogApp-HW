const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    title: String,
    year: Number,
    isRead: Boolean,
    comments: String,
    cover: String,
    author: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    }],
},{
    timestamps: true
});




const Review = mongoose.model("Review", reviewSchema);


module.exports = {Review};