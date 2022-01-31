const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({
    messages: [
        {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Message",
        },
      ],
      otherUsers : [
        {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "User",
        },
      ],
    },
{convercommunicateTime: true}
);

module.exports = Profile = mongoose.model("Conversation", conversationSchema);