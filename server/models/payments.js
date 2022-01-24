const mongoose = require("mongoose");

const cardDetials = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  lastFour: {
    type: String,
    default: "",
  },
  cardType: {
    type: String,
    default: "",
  },
  expirelyDate: {
    type: String,
    default: "",
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = CardDetails = mongoose.model("CardDetails", cardDetials);
