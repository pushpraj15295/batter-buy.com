//***************************************************************************************express server */
const express = require("express");
const dbConnect = require("./config/db");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const { ProductRoute, UserRoute, OAuthRoute, gitRoute, googleRoute, menRoute, womenRoute, kidsRoute } = require('./Routes/index');
const cors = require("cors")
dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.set("view engine", "ejs");
app.use("/user",UserRoute);
app.use("/allProducts",ProductRoute);
app.use("/men",menRoute);
app.use("/women",womenRoute);
app.use("/kids",kidsRoute);
app.use("/oauth",gitRoute);
app.use("/auth",googleRoute);
app.get("/", (req, res) => res.send("wellcome to home"));

connectDB();

const port = process.env.PORT || 8080;
app.listen(port,async () => {
  await dbConnect();
  console.log("server running on port : http://localhost:8080");
});
