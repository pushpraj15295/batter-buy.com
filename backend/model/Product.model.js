//***********************************************************************************************Prodduct model + schema */

const { model, Schema } = require("mongoose");
const productSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  categories: [{ type: String }],
  price: { type: Number, required: true },
  rating: { type: Number, min: 0, max: 5 },
  description: { type: String },
});
const productModel = model("product", productSchema);
module.exports = productModel;
