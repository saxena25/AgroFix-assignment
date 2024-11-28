const express = require("express");
const router = express.Router();
const Order = require("../models/order.model");

//! Get All Orders
router.get("/orders", async (req , res)=>{
    try {
        const orders = await Order.find().populate("items.product", "name price")
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({message: "failed to Fetch Orders"})
    }
})

//! Update Order Status
router.patch("/orders/:id/status", async (req, res)=>{
    try {
        const {status} = req.body;
        const allowedStatus = ["pending", "In Progress", "Delivered"];

        if(!allowedStatus.includes(status)){
            res.status(400).json({error: "Invalid Order Status"})
        }

        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {status}, {new: true}).populate("items.product", "name price");

        if(!updatedOrder){
            return res.status(404).json({error: "Order Not Found"})
        }

        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({error: "Failed to Update Order Status"})
    }
})

module.exports = router;