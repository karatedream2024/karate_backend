import express from "express";
import { addTocart, getcartdetails } from "../controller/cartController.js";

const cartRouter = express.Router();

cartRouter.post("/addtocart", addTocart)
cartRouter.get("/getcart", getcartdetails)



export {cartRouter}
