const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        minlength: [3, "First Name must be at least 3 characters."],
        maxlength: [25, "Is your name really that long? Try abbreviating."]
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3, "Last Name must be at least 3 characters."],
        maxlength: [50, "Is your name really that long? Try abbreviating."]
    },
    emailAddress: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Your password is too weak."]
    }

},{
    timestamps: true
})

userSchema.methods.verifyPassword = function(password){
    console.log("Plain text PW:", password);
    console.log("Encrypted PW:", this.password);
    return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model("User", userSchema);

module.exports = User;