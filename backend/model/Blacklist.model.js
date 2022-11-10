const { model, Schema } = require("mongoose");

const blacklistSchema = new Schema({
    token: { tyoe: String }
})

const blacklistModel = model('blacklist', blacklistSchema);

module.exports = blacklistModel;