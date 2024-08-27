import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
    userId: {
        type : String,
        required : true
    },
    productId:[ {
        type : String,
        required : true
    }],
    Address: {
        type : String,
        required : true
    },
    deviliryType: {
        type : String,
        required : true
    },  
    date: {
        type : Date,
        default : Date.now
    }


}, {timestamps : true})


const OrderModel = mongoose.model('Order', orderSchema);
export default OrderModel