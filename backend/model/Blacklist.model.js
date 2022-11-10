//******************************************************************************************Blacklist model + schema */
const { model, Schema } = require("mongoose");
const blacklistSchema = new schema({
  token: { type: String },
});
const blacklistModel = model("blacklist", blacklistSchema);
module.exports = blacklistModel;
