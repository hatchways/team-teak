const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
        sender: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "User",
        },
        content: {
          type: String,
          default: "",
        },
      },
{conversationTime: true}
);

module.exports = Profile = mongoose.model("Message", messageSchema);