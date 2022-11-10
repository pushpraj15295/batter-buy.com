//************************************************************************************exporting all Routes */
const ProductRoute = require("./Product.router");
const UserRoute = require("./User.router");
const OAuthRoute = require("./OAuthRoutes");
const gitRoute = require("./git.router");
const googleRoute = require("./google.router");
module.exports = { ProductRoute, UserRoute, OAuthRoute, gitRoute, googleRoute };