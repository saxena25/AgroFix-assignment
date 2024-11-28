const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");

//! Add a Product 
router.post("/add/product", async (req,res)=>{
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json({message: "Product Added Successfully"})
    } catch (error) {
        res.status(500).json({error: "Failed to Product"});
    }
})

//! Edit a Product
router.patch("/edit/product/:id", async (req, res)=>{
    try {
        const {name, price} = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {name, price}, {new: true});

        if(!updatedProduct){
            res.status(404).json({error: "Product not Found"});
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({error: "Failed to Update Product"});
    }
})


//! Delete a Product
router.delete("/delete/product/:id", async (req, res)=>{
    try {
        const deletedProduct =await Product.findByIdAndDelete(req.params.id);

        if(!deletedProduct){
            res.status(404).json({error: "Product Not Found"})
        }

        res.json({message: "Product Deleted Successfully"});
    } catch (error) {
        res.status(500).json({error: "Failed to Delete Product"});
    }
})

module.exports = router;