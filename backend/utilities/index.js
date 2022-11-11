const passport = require("./google-oauth");
const transporter = require("./nodemailer-transporter");
module.exports = {passport, transporter};