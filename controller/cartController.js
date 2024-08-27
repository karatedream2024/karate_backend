import mongoose from "mongoose";
import CartModel from "../model/cartModel.js";
import productmodel from "../model/productModel.js";


const addTocart = async (req, res) => {
    console.log('work well')

    try{
        const saveCart = new CartModel(req.body)
        await saveCart.save()
        res.status(200).json({ status: "success", data: saveCart, message: "Cart Created Successfully" })
    }
    catch(error){
        console.log(error)
        res.status(400).json({ message: "server Internal Error" })
    }  

 }

 const getcartdetails = async (req, res) => {
    try {
        const getcartdetails = await CartModel.find({userId: "66ab620aeb9a27cd03ae5c18"})
        if (!getcartdetails) {
            res.status(200).json({ message: "no data found" })
        }
       const getId = getcartdetails[0].productId

       const getProductDetails = await productmodel.find({ _id: getId })



        res.status(200).json({ status: "success", data: getProductDetails, message: "Cart Created Successfully" })
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ message: "server Internal Error" })
    }
 }

 export {addTocart, getcartdetails}