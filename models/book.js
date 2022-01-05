const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({

    id: { //id
        type: String,
        // required: true,
        // unique: true
        default: "",
    },
    title: {
        type: String,
        default: "",
    },
    subtitle: {
        type: String,
        default: "",
    },
    author: {
        type: String,
        default: "",
    },


    description: {
        type: String,
        default: "",
    },
    price: {
        type: String,
        default: "",
    },
    address: {
        type: String,
        default: "",
    },

    bookImageUrl: {
        type: String,
        default: "",
    },

});
module.exports = mongoose.model("Book", bookSchema);