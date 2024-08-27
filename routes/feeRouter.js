import express from "express";
import { createfees, getfees } from "../controller/feesController.js";

const feeRouter = express.Router();
// attendenceRouter.get("/getattendence", getattendences)
feeRouter.post("/updatefee", createfees)
feeRouter.get("/getfee", getfees)


export {feeRouter}