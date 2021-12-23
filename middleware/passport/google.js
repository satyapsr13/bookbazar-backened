const {
    app,
    passport
} = require("./passport");
const app1 = require("express").Router();
var userProfile;
// const GoogleStrategy = require('passport-google-oauth2').OAuth2Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const GOOGLE_CLIENT_ID = '256751926745-68j0hgg8663t1tqsp6rb36086sor0uue.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';
passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/callback"
    },
    function (accessToken, refreshToken, profile, done) {
        userProfile = profile;
        console.log(userProfile);

        return done(null, userProfile);
    }
));

app1.get('/',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

app1.get('/callback',
    passport.authenticate('google', {
        failureRedirect: '/error'

    }),
    function (req, res) {
        // Successful authentication, redirect success.
        res.status(200).json({
            user: userProfile
        });
    });

module.exports = app1;