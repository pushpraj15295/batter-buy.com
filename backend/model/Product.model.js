//***********************************************************************************************Prodduct model + schema */

const { model, Schema } = require("mongoose");
const productSchema = new Schema({
  title: { type: String, required: true },
  gender: { type:String, enum:["male","female"] },
  description: { type:String },
  categories: { type: String },
  price: { type: Number, required: true },
  size:[{ type:String }],
  color: {type:String},
  rating: { type: Number, min: 0, max: 5 },
  img:[{ type:String }]
});
const productModel = model("product", productSchema);
module.exports = productModel;
