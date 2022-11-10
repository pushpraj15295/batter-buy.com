// nodemailer
require("dotenv").config()
const nodemailer = require("nodemailer");
const Mail = process.env.EMAIL;
const Password = process.env.PASSWORD
const transporter = nodemailer.createTransport({
    service : "gmail",
    auth: {
        user: "nirmalkumargurajada@gmail.com",
        pass: "hoboardwfzbzrbis"
    }
});

module.exports = transporter;