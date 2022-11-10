const express = require("express");
const passport = require("../utilities/google-oauth");
const app = express.Router();

app.get('/google',passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login', session:false }),
  function(req, res) {
    // Successful authentication, redirect home.
    //create main token and refresh token here to store in redux store
    res.send("Google sign in successful")
    // res.redirect('/');
});

module.exports = app