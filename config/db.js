const mongoose = require('mongoose');
const mongoURL = process.env.MONGODB_URL;

const connect = async ()=>{
    try {
        await mongoose.connect(mongoURL);
        console.log("Connected to DB");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connect;