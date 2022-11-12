//****************************************************************************************** Email - nodemailer  */ 
require("dotenv").config()
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service : "gmail",
    auth: {
        user: "nirmalkumargurajada@gmail.com",
        pass: "hoboardwfzbzrbis"
    }
});

module.exports = transporter;