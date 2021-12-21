require("dotenv").config();
const mongoose = require("mongoose");

function connectDB() {
    mongoose.connect(process.env.mongo_url);
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('database connected');
    });


}
module.exports = connectDB;