const { model, Schema } = require("mongoose");

const productSchema = new Schema({
    name: { type:String } ,
    quantity:{ type:Number } ,
    categories: [{ type: String }] ,
    price: { type:Number, required: true } ,
    rating: { type:Number, required: true, min: 0, max:5 } ,
    description: { type: String }
})

const productModel = model('product', productSchema);

module.exports = productModel;