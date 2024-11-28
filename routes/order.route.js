const express = require("express");
// const mongoose = require("mongoose");
const router = express.Router();
const validateOrder = require("../validator/validate.order");
// const Product = require("../models/product.model")
const Order = require("../models/order.model");

//! Place Bulk Order
router.post("/place", validateOrder, async (req, res)=>{
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json({
            message: "Order Placed Successfully",
            orderId: order._id,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "An error while placing an Order, Please try again"
        })
    }
})

//! Get All Orders
router.get("/", async (req,res)=>{
    try {
        const orders = await Order.find().populate("items.product", "name price");
        res.json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "An error while fetching orders, Please try again"
        })
    }
})

module.exports = router;