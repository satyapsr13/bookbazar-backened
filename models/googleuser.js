const mongoose = require("mongoose");

const googleuserSchema = new mongoose.Schema({
  displayName: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    unique: true,
  },
  id: {
    type: String,
  },
  photoUrl: {
    type: String,
  },
});

module.exports = mongoose.model("GoogleUser", googleuserSchema);
