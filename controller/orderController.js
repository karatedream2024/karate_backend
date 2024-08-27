import OrderModel from "../model/orderModel";

const postOrder = async (req, res) => {
    const newOrder = new OrderModel(req.body);
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
}


export { postOrder }