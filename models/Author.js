const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
    name: String,
    nationality: String,
    yearBorn: Number,
    isAlive: Boolean,
    review: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"
    }]
},{
    timestamps: true
})

const Author = mongoose.model("Author", authorSchema)

module.exports = {Author};