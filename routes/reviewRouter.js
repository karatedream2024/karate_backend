import express from 'express'
import { getEachProductReivew, postReview } from '../controller/reviewController.js'

const reviewRouter = express.Router()

reviewRouter.post("/postreview", postReview)
reviewRouter.get("/getreview", getEachProductReivew)


export {reviewRouter} 