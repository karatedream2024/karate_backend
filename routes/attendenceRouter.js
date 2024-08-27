import express from "express";
import { getattendences, updateAttendances } from "../controller/attendenceController.js";

const attendenceRouter = express.Router();
attendenceRouter.get("/getattendence", getattendences)
attendenceRouter.post("/updateattendence", updateAttendances)


export {attendenceRouter}