import ReviewModel from "../model/reviewModel.js";
import productmodel from "../model/productModel.js";

const postReview = async (req, res) => {


    try {
        const saveReview = new ReviewModel(req.body)
        await saveReview.save()
        const like = await productmodel.updateOne({ _id: req.body.productId }, { $push: { reviewStore: saveReview._id } })
        res.status(200).json({ status: "success", data: saveReview, message: "Review Created Successfully" })
    }

    catch (error) {
        console.log('error', error)
        res.status(400).json({ message: "server Internal Error" })
    }
}

const getEachProductReivew = async (req, res) => {
    try {
        const getEachProductReivew = await productmodel.find({ _id: '66ab60c5eb9a27cd03ae5c07' }).populate('reviewStore', ['review', 'rating'])
        res.status(200).json({ status: "success", data: getEachProductReivew, message: "Review Created Successfully" })
    }

    catch (error) {
        console.log('error', error)
        res.status(400).json({ message: "server Internal Error" })
    }
}


export { postReview, getEachProductReivew }