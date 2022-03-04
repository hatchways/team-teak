const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Profile",
  },
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Profile",
  },
});

module.exports = Conversation = mongoose.model(
  "Conversation",
  conversationSchema
);
