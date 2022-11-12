//******************************************************************************************Blacklist model + schema */
const { model, Schema } = require("mongoose");
const blacklistSchema = new Schema({
  token: { type: String },
});
const blacklistModel = model("blacklist", blacklistSchema);
module.exports = blacklistModel;
