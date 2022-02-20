const Conversation = require("../models/Conversation");
const Message = require("../models/Message");
const asyncHandler = require("express-async-handler");
const Profile = require("../models/Profile");
const {
  getAllMessagesOnAConversation,
  getAllConversations,
} = require("../utils/getMessagingData");
const mongoose = require("mongoose");

// @route POST /conversation/createConversation
// @desc create a new conversation
// @access Public
exports.createConversation = asyncHandler(async (req, res, next) => {
  const { receiverId, initialMessage } = req.body;
  const { id: senderId } = req.user;

  const recieverProfile = await Profile.findById(receiverId);
  if (!recieverProfile) {
    res.status(404);
    throw new Error("This sitter does not exist");
  }

  const conversationIsAvailable = await Conversation.findOne({
    receiverId,
    senderId,
  });

  let message;

  if (conversationIsAvailable) {
    message = await Message.create({
      senderId,
      receiverId,
      message: initialMessage,
    });
  } else {
    const conversation = await Conversation.create({
      receiverId,
      senderId,
    });

    message = await Message.create({
      senderId,
      receiverId,
      message: initialMessage,
    });
  }

  return res.status(201).send({
    success: {
      message,
    },
  });
});

// @route GET /conversation/getAllMessageByConversation
// @desc get all messages from a single conversation
// @access Public
exports.getAllMessageByConversation = asyncHandler(async (req, res, next) => {
  const { receiverId } = req.params;

  const conditions = {
    senderId: mongoose.Types.ObjectId(req.user.id),
    receiverId: mongoose.Types.ObjectId(receiverId),
  };
  const conversations = await getAllMessagesOnAConversation(conditions);

  res.status(200).json({
    success: {
      messages: conversations,
    },
  });
});

// @route POST /conversation/sendMessage
// @desc send a message to a conversation
// @access Private
exports.sendMessage = asyncHandler(async (req, res, next) => {
  const { receiverId, message } = req.body;

  const senderId = req.user.id;

  const conversation = await Conversation.findOne({
    receiverId: mongoose.Types.ObjectId(receiverId),
    senderId: mongoose.Types.ObjectId(senderId),
  });
  let messages;

  if (!conversation) {
    await Conversation.create({
      receiverId,
      senderId,
    });

    messages = await Message.create({
      senderId,
      receiverId,
      message: message,
    });
  } else {
    messages = await Message.create({
      senderId,
      receiverId,
      message: message,
    });
  }

  res.status(200).send({
    success: {
      message: messages,
    },
  });
});

// @route GET /conversation/getAllConversations
// @desc get all conversations for a user
// @access Private
exports.getAllConversations = asyncHandler(async (req, res, next) => {
  const conditions = {
    senderId: mongoose.Types.ObjectId(req.user.id),
  };

  const conversations = await getAllConversations(conditions);

  res.status(200).json({
    success: {
      conversations,
    },
  });
});
