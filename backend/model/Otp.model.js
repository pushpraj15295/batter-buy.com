//******************************************************************************************profilepic model + schema */
const { Schema, model } = require("mongoose");
const profilepicSchema = new Schema({
  name: { type: String },
  image: { type: Buffer, contentType: String },
});
const profilepicModel = model("profilepic", profilepicSchema);
module.exports = profilepicModel;
