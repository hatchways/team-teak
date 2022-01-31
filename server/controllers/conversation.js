const Conversation = require("../models/Conversation");
const Message = require("../models/Message");
const asyncHandler = require("express-async-handler");


// @route POST /conversation/createConversation
// @desc create a new conversation
// @access Public
exports.createConversation = asyncHandler(async (req, res, next) => {
    const { content, receiver } = req.body;

    if(!content || !receiver){
        res.status(400).send("there is deescription or receiver");
    }

    const newMessage = await Message.create({
        sender: req.user.id,
        content,
    });

    const existConversation = await Conversation.findOne({
        otherUser:{ $all: [`${req.user.id}, ${receiver}`]}
    });

    if(existConversation){
        existConversation.message.push(newMessage);

        await existConversation.save();

        res.status(200).json({
            success: {
                oldConversation: existingConversation,
            }
        });
    } else {
        const conversation = await Conversation.create({
            otherUser: [req.user.id, receiver],
          });
      
          conversation.messages.push(message);
      
          await conversation.save();
      
          res.status(200).json({
            success: {
              conversation,
            },
          });
        }
    });


// @route GET /conversation/getConversationByUserId
// @desc get all messages from a single conversation
// @access Public
 exports.getAllMessages = asyncHandler(async (req, res, next) => {

    const { conversationByUserId } = req.params;

  const conversation = await Conversation.findById(conversationByUserId).populate({
    path: "messages",
    sort: { updatedAt: "desc" },
  });

  if (
    conversation.participants[0].toString() === req.user.id ||
    conversation.participants[1].toString() === req.user.id
  ) {
    res.status(200).json({
      success: {
        conversation,
      },
    });
  } else {
    res.status(401).send("Not authorized account");
  }
});

// @route POST /conversation/sendMessage
// @desc send a message to a conversation
// @access Private
exports.sendMessage = asyncHandler(async (req, res, next) => {
    const { conversationByUserId, description  } = req.body;
  
    if (!description || !receiver || !conversationByUserId) {
      res.status(400).send("Bad request");
    }

    const conversation = await Conversation.findById(conversationByUserId);

    if (
      conversation.participants[0].toString() === req.user.id ||
      conversation.participants[1].toString() === req.user.id
    ) {
      const message = await Message.create({
        sender: req.user.id,
        description,
      });
  
      conversation.messages.push(message);
  
      await conversation.save();
  
      res.status(200).json({
        success: {
          conversation,
        },
      });
    } else {
      res.status(401).send("Not authorized account");
    }
  });
  
  // @route GET /conversation/getAllConversation
  // @desc get all conversations for a user
  // @access Private
  exports.getAllConversations = asyncHandler(async (req, res, next) => {
    const conversations = await Conversation.find({
      otherUsers: { $in: req.user.id },
    }).populate({
        path: "conversation",
        sort: { updatedAt: "desc" },
      });
    
      res.status(200).json({
        success: {
          conversations,
        },
      });
    });
