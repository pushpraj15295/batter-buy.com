const GoogleStrategy = require('passport-google-oauth20').Strategy;
require("dotenv").config()
const { v4: uuidv4 } = require('uuid');

// const GOOGLE_CLIENT_ID=process.env.gci;
const GOOGLE_CLIENT_SECRET=process.env.gcs;

const passport=require("passport");
const { userModel } = require('../model');

passport.use(new GoogleStrategy({
    clientID: "952878443454-a93qakhukunlkeiq0d23pibkm4s0hbql.apps.googleusercontent.com",
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {
        const email=profile._json.email
        const user={
            email: email,
            password: uuidv4(),
            role
        }
        const newUser=await userModel.create(user)
        const {_id,password}=newUser
        const payload={
         email,
        //  password,
         _id,
        //  url:profile._json.picture
        }
        return cb(null,payload)
      }
));

module.exports=passport;    