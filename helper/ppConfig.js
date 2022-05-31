// Requiring passport
const passport = require("passport");


// Requiring passport-local strategy
const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/User");

// Serialize user
// Saving the data into the session
// We can save any information into session
// ID is a unique identifier
passport.serializeUser(function(user, done){
    done(null, user.id)
})


// Deserialize user
// Reading the information from the DB according to the user ID
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    })
})


passport.use(new LocalStrategy(
    {
        usernameField: "emailAddress",
        passwordField: "password"
    },
    function(emailAddress, password, done) {
      User.findOne({ emailAddress: emailAddress }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));



module.exports = passport;