const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  //   _id: { type: String },
  id: {
    //id
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "default",
  },
  subtitle: {
    type: String,
    default: "default",
  },
  author: {
    type: String,
    default: "default",
  },

  description: {
    type: String,
    default: "default",
  },
  price: {
    type: String,
    default: "default",
  },
  address: {
    type: String,
    default: "default",
  },

  bookImageUrl: {
    type: String,
    default: "default",
  },
});
module.exports = mongoose.model("book", bookSchema);
