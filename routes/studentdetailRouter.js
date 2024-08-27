import express from "express";
import { postStudent } from "../controller/studentController.js";


const studentdetailRouter = express.Router();


studentdetailRouter.post("/poststudentdetail", postStudent)


export {studentdetailRouter}