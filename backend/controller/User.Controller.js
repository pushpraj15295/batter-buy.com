const loginController = async(email,password,jwt,req,res,userModel)=>{
    const user = await userModel.findOne({email, password});
        if(!user) return res.send("Entered Wrong Credentials");
        const mainToken = jwt.sign({email: user.email, id: user._id }, "MAIN_SECRET",{
            expiresIn: "10 seconds"
        })
        const refreshToken = jwt.sign({email: user.email, id: user._id }, "REFRESH_SECRET", {
            expiresIn: "1 week"
        })
        res.send({
            message: "User Logged in Successfull",
            mToken: mainToken,
            rToken: refreshToken
        });
}

const signupController = async (email,req,res,userModel)=>{
        const user = await userModel.findOne({email});
        if(user) return res.send("user already exist");
        const newUser = await userModel.create(req.body);
        res.send("User created Successfully");
}

const refreshController = async(rToken,jwt,req,res,blacklistModel)=>{
    const bToken = await blacklistModel.findOne({token:rToken});
        if(bToken){
            return res.status(401).send("unauthorized as token is blacklisted try Logging in again");
        }
        const payload = jwt.verify(rToken,"REFRESH_SECRET");
        const mToken = jwt.sign({id:user._id,email:user.email,role:user.role}, "MAIN_SECRET",{
            expiresIn: "2 days"
        })
        res.status(200).send({
            message: "Token generated successfully",
            mt:mToken
        })
}

module.exports = { loginController, signupController, refreshController }