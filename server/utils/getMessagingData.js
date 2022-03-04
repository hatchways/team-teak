const Conversation = require("../models/Conversation");
const Message = require("../models/Message");
exports.getAllMessagesOnAConversation = async (conditions = {}) => {
  const messages = await Message.aggregate([
    { $match: { ...conditions } },
    {
      $lookup: {
        from: "profiles",
        localField: "receiverId",
        foreignField: "_id",
        as: "profiles",
      },
    },

    {
      $project: {
        createdAt: {
          $dateToString: { format: "%d/%m/%Y %H:%M", date: "$createdAt" },
        },
        message: "$message",
        receiverId: "$receiverId",
        senderId: "$senderId",
        profiles: {
          name: "$profiles.name",
          photo: "$profiles.photo",
        },
      },
    },
    {
      $group: {
        _id: "$_id",
        message: { $first: "$message" },
        createdAt: { $first: "$createdAt" },
        receiverId: { $first: "$receiverId" },
        senderId: { $first: "$senderId" },
        user: {
          $first: {
            name: { $first: { $first: "$profiles.name" } },
            photo: { $first: { $first: "$profiles.photo" } },
          },
        },
      },
    },
    { $sort: { createdAt: -1 } },
  ]);

  return messages;
};

exports.getAllConversations = async (conditions = {}) => {
  const conversations = await Conversation.aggregate([
    { $match: { ...conditions } },
    {
      $lookup: {
        from: "profiles",
        localField: "receiverId",
        foreignField: "_id",
        as: "profiles",
      },
    },

    {
      $project: {
        receiverId: "$receiverId",
        senderId: "$senderId",
        profiles: {
          name: "$profiles.name",
          photo: "$profiles.photo",
        },
      },
    },
    {
      $group: {
        _id: "$_id",
        receiverId: { $first: "$receiverId" },
        senderId: { $first: "$senderId" },
        user: {
          $first: {
            name: { $first: { $first: "$profiles.name" } },
            photo: { $first: { $first: "$profiles.photo" } },
          },
        },
      },
    },
    { $sort: { createdAt: -1 } },
    {
      $lookup: {
        from: "messages",
        localField: "receiverId",
        foreignField: "receiverId",
        as: "messages",
      },
    },
  ]);

  return conversations;
};
