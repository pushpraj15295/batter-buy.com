const {Schema, model} = require("mongoose");

const otpSchema = new Schema({
    otp:{type:String},
    userId:{ type: Schema.Types.ObjectId, ref: 'user', required: true }
})

const otpModel = model("otp",otpSchema);

module.exports = otpModel;