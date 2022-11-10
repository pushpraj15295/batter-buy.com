const express = require("express");
const { userModel, blacklistModel, otpModel } = require("../model/");
const jwt = require("jsonwebtoken");
const app = express.Router();
const { loginController, signupController } = require("../controller/");
app.post("/signup", async (req,res)=>{
    const { email } = req.body
    try{
        signupController(email,req,res,userModel);
    }catch(e){
        res.send(e.message);
    }
})

app.post("/login", async (req,res)=>{
    const { email, password } = req.body
    try{
        return loginController(email,password,jwt,req,res,userModel);
    }catch(e){
        res.send(e.message)
    }
})

app.post("/refresh", async(req,res)=>{
    const rToken = req.headers.authorization;
    try{
        
    }catch(e){
        if(e.message==="jwt expired") { const token = await blacklistModel.create({token:rToken});
            console.log(token)
        }
        return res.status(404).send(e.message); 
    }
});

app.post("/reset-password/getotp",async (req,res)=>{
    const { email, password } = req.body;
    try{
        const user = await userModel.findOne({email});
        const mToken = req.headers.authorization;
        if(!user) return res.status(400).send("Incorrect credentials entered");
        generateOtp(transporter, res, mToken)
    }catch(e){
        return res.status(404).send(e.message);
    }
    
});

app.post("/update-password", async(req,res)=>{
    const mToken = req.headers.authorization;
    const {OTP, newPassword} = req.body
    try{
        const payload = jwt.verify(mToken,'msecret');
        const otp = await otpModel.findOne({otp:OTP, userId: payload.id});
        if(!otp)return response.status(401).send('Enter Valid otp');
        const user = await userModel.updateOne({_id:payload.id},{$set:{"password":newPassword}});
        res.send(user)
    }catch(e){
        res.send(e.message)
    }
});

module.exports = app;