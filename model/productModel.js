import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    productTitle: {
        type: String,
        required: true
    },
    productOffer: {
        type: String,
        default: 0,
        required: true
    },
    productPrice: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    productColor: [{
        type: String,
        required: true
    }
    ],
    qualityType:[ {
        type: String,
    }],
    productImage: {
        type: String,
        required: true
    },
    reviewStore:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    date: {
        type: Date,
        default: Date.now
    }


}) 

const productmodel = mongoose.model('Product', productSchema);
export default productmodel