import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: {
        type : String,
        required : true
    },
    productId:[ {
        type : String,
        required : true
    } ]

}, {timestamps : true})

const CartModel = mongoose.model('Cart', cartSchema);

export default CartModel