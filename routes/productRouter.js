import express from 'express';
import { createMultiProduct, createProduct, getproduct } from '../controller/productController.js';


const productRouter = express.Router();

productRouter.post("/createproduct", createProduct)
productRouter.post("/createmultiproduct", createMultiProduct)
productRouter.get("/getroduct", getproduct)


export {productRouter}