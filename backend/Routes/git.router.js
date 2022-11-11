const express = require("express");
const passport = require("../utilities/google-oauth");
const app = express.Router();

app.get("/github",async (req,res)=>{
    res.send("<a href='https://github.com/login/oauth//authorize?client_id=c87450b270b39d252921'>Sign in with github</a>")
})

app.get("/github/callback", (req, res)=>{
    res.send("Github login Successfull");
});

module.exports = app;