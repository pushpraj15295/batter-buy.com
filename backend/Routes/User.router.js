//******************************************************************************************************User route */
const express = require("express");
const { userModel, blacklistModel, otpModel, productModel } = require("../model/");
const jwt = require("jsonwebtoken");
const { loginController, signupController, refreshController } = require("../controller/");
const imageModel = require("../model/ProfilePic.model")

const bodyParser = require("body-parser");
const app = express.Router();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, file.fieldname + '-' + Date.now())
    }
})

const upload = multer({ storage: storage })

// app.post("/upload", upload.single('image'),async (req,res)=>{
//     console.log(__dirname)
//     var obj = {
//         name: req.body.name,
//         desc: req.body.desc,
//         img: {
//             data: fs.readFileSync(path.join(__dirname + "/user/" +req.file.filename)),
//             contentType: 'image/png'
//         }
//     }
//     // imageModel.create(obj, (err, item) => {
//     //     if (err) {
//     //         console.log(err,'yj');
//     //     }
//     //     else {
//     //         // item.save();
//     //         res.redirect('/');
//     //     }
//     // });
//     res.send(obj)
// })

// upload.single('testImage'),


app.post("/signup",  async (req, res) => {
    const { email } = req.body
    try {
        signupController(email,req,res,userModel);
    } catch (e) {
        res.send(e.message);
    }
})

app.post("/upload", upload.single("image"), (req, res) => {

})
//****************************************************************************** /login   */
app.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {
        return loginController(email, password, jwt, req, res, userModel);
    } catch (e) {
        res.send(e.message)
    }
})
//******************************************************************************  /refresh token  */
app.post("/refresh", async (req, res) => {
    const rToken = req.headers.authorization;
    try {
        return refreshController()
    } catch (e) {
        if (e.message === "jwt expired") {
            const token = await blacklistModel.create({ token: rToken });
            console.log(token)
        }
        return res.status(404).send(e.message);
    }
});
//****************************************************************************  /reset-password */
app.post("/reset-password/getotp", async (req, res) => {
    const { email } = req.body;
    try {
        const user = await userModel.findOne({ email });
        const mToken = req.headers.authorization;
        if (user) return res.status(200).send("Email exit");
        else return res.status(401).send("Email Not exit");
        generateOtp(transporter, res, mToken)
    } catch (e) {
        return res.status(404).send(e.message);
    }
});
//***************************************************************************** /update-password */
app.post("/update-password", async (req, res) => {
    const mToken = req.headers.authorization;
    const { OTP, newPassword } = req.body
    try {
        const payload = jwt.verify(mToken, 'msecret');
        const otp = await otpModel.findOne({ otp: OTP, userId: payload.id });
        if (!otp) return response.status(401).send('Enter Valid otp');
        const user = await userModel.updateOne({ _id: payload.id }, { $set: { "password": newPassword } });
        res.send(user)
    } catch (e) {
        res.send(e.message)
    }
});

app.get("/cartItems", async(req,res)=>{
    const token = req.headers.authorization;
    try{
        const verify = jwt.verify(token, "MAIN_SECRET")
        const data = await userModel.find({_id:verify.id},{cart:1});
        res.send(data);
    }catch(e){
        res.send(e.message);
    }
})

app.patch("/userCart",async(req,res)=>{
    const mToken = req.headers.authorization;
    console.log(req.headers.authorization)
    try{
        const verify = jwt.verify(mToken,"MAIN_SECRET" );
        const newCartItem = await userModel.updateOne({_id:verify.id}, {$push:{ cart: req.body }});
        res.send(newCartItem);
    }catch(e){
        res.send("/login")
    }
});

app.delete("/deleteCartItem", async(req,res)=>{
    try{
        const item = await userModel.updateOne({_id:req.body._id}, {$pull: { cart: req.body._id }})
        res.send("deleted Successfully");
    }catch(e){
        res.send(e.message);
    }
})

module.exports = app;