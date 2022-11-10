//************************************************************************************exporting all Routes */
const ProductRoute = require("./Product.router");
const UserRoute = require("./User.router");
const OAuthRoute = require("./OAuthRoutes");
module.exports = { ProductRoute, UserRoute, OAuthRoute };