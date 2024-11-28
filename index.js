require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db")
const productRouter = require("./routes/product.route");
const orderRouter = require("./routes/order.route");
const adminOrderRouter = require("./routes/adminOrders.route")
const adminProductRouter = require("./routes/adminProduct.route");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/products",productRouter);
app.use("/orders", orderRouter);
app.use("/admin", adminOrderRouter);
app.use("/admin",adminProductRouter);

app.listen(process.env.PORT, async()=>{
    await connectDB();
    console.log(`Server is Running on PORT ${process.env.PORT}`);
})