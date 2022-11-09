const express = require("express");
const { userModel } = require("../model");
const jwt = require("jsonwebtoken");
const app = express.Router();

app.post("/signup", async (req,res)=>{
    const { email } = req.body
    try{
        const user = await userModel.findOne({email});
        if(user) return res.send("user already exist");
        const newUser = await userModel.create(req.body);
        res.send("User created Successfully");
    }catch(e){
        res.send(e.message)
    }
})

app.post("/login", async (req,res)=>{
    const { email, password } = req.body
    try{
        const user = await userModel.findOne({email, password});
        if(!user) return res.send("Entered Wrong Credentials");
        const mainToken = jwt.sign({email: user.email, id: user._id }, "MAIN_SECRET",{
            expiresIn: "2 days"
        })
        const refreshToken = jwt.sign({email: user.email, id: user._id }, "REFRESH_SECRET", {
            expiresIn: "1 week"
        })
        res.send({
            message: "User Logged in Successfull",
            mToken: mainToken,
            rToken: refreshToken
        });
    }catch(e){
        res.send(e.message)
    }
})

module.exports = app;