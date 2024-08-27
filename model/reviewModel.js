import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({


    userId: {
        type : String
    },
    productId: {
        type : String 
    },
    review: {
        type : String
    },
    rating: {
        type : Number
    },
    date: {
        type : Date,
        default : Date.now
    }


})

const ReviewModel = mongoose.model('Review', reviewSchema);
export default ReviewModel