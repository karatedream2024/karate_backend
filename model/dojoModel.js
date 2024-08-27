import mongoose from "mongoose";

const dojoSchema = new mongoose.Schema({
    dojoName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    incharge:{
        type: String,
        required: true
    },
    aboutdojo: {
        type: String,
        required: true
    }
    })
    const dojoModel = mongoose.model('Dojo', dojoSchema);
    export default dojoModel