const Conversation = require("../models/Conversation");
const Message = require("../models/Message");
const asyncHandler = require("express-async-handler");

// @route POST /conversation/createConversation
// @desc create a new conversation
// @access Public
exports.createConversation = asyncHandler(async (req, res, next) => {
    const { content, receiver } = req.body;

    if(!content || !receiver){
        res.status(400).send("deescription or receiver can't be null");
    }

    const newMessage = await Message.create({
        sender: req.user.id,
        content,
    });

    const existConversation = await Conversation.findOne({
        otherUsers:{ $all: [`${req.user.id}, ${receiver}`]}
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
            otherUsers: [req.user.id, receiver],
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


// @route GET /conversation/getAllMessageByConversation
// @desc get all messages from a single conversation
// @access Public
 exports.getAllMessageByConversation = asyncHandler(async (req, res, next) => {

    const { conversationByUserId } = req.params;

  const conversation = await Conversation.findById(conversationByUserId).populate({
    path: "messages",
    sort: { updatedAt: "desc" },
  });

    res.status(200).json({
      success: {
        conversation,
      },
    });
  
});

// @route POST /conversation/sendMessage
// @desc send a message to a conversation
// @access Private
exports.sendMessage = asyncHandler(async (req, res, next) => {
    const { conversationByUserId, content  } = req.body;
  
    if (!content || !conversationByUserId) {
      res.status(400).send("Bad request");
    }

    const conversation = await Conversation.findById(conversationByUserId);

    
    const message = await Message.create({
      sender: req.user.id,
      content,
    });

    conversation.messages.push(message);

    await conversation.save();

    res.status(200).json({
      success: {
        conversation,
      },
    });
    
  });
  
  // @route GET /conversation/getAllConversations
  // @desc get all conversations for a user
  // @access Private
  exports.getAllConversations = asyncHandler(async (req, res, next) => {
    const conversations = await Conversation.find({
      otherUsers: { $in: req.user.id },
    }).populate({
        path: "messages",
        sort: { updatedAt: "desc" },
      });
    
      res.status(200).json({
        success: {
          conversations,
        },
      });
    });
