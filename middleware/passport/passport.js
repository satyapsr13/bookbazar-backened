const express = require("express");
const app = express();
const passport = require('passport');
var userProfile;

app.use(passport.initialize());
app.use(passport.session());


app.get('/success', (req, res) => res.status(200).json({
    user: userProfile
}));
app.get('/error', (req, res) => res.status(400).json({
    e: "user not found"
}));
passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});
module.exports = {
    app,
    passport
};