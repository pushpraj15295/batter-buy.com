//************************************************************************************exporting all Routes */
const ProductRoute = require("./Product.router");
const UserRoute = require("./User.router");
const OAuthRoute = require("./OAuthRoutes");
const gitRoute = require("./git.router");
const googleRoute = require("./google.router");
const menRoute = require("./men.router");
const womenRoute = require("./women.router");
const kidsRoute = require("./kids.router");
module.exports = { ProductRoute, UserRoute, OAuthRoute, gitRoute, googleRoute, menRoute, womenRoute, kidsRoute };