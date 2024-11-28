const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");

//! Add Product
router.post("/add", async (req, res)=>{
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

//! Get All Products
router.get("/", async (req, res)=>{
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

module.exports = router;
