const mongoose = require("mongoose");

//^ Bulk order schema
const orderItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: [1, "Quantity must be at least 1"]
    }
})

const orderSchema = new mongoose.Schema({
    buyerName: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    items: [orderItemSchema],
    status:{
        type: String,
        enum: ["Pending", "In Progress" ,"Delivered"],
        default: "Pending"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
