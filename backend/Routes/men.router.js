//*****************************************************************************************************product route */
const express = require("express");
const { productModel } = require("../model");
const jwt = require("jsonwebtoken");
const blacklistModel = require("../model/Blacklist.model");
const app = express.Router();


app.get("/", async (req,res)=>{
    const mToken = req.headers.authorization
    const bToken = await blacklistModel.findOne({token:mToken});
    if(bToken) return res.send("Token is Blacklisted try login again.")
    try{
        const verify = jwt.verify(mToken,"MAIN_SECRET");
        const products = await productModel.find({gender: "Men"});
        console.log(products)
        res.send({
            message: 'Success',
            products: products
        })
    }catch(e){
        if(e.message==='jwt expired') await blacklistModel.create(mToken);
        res.send(e.message)
    }
})

module.exports = app;