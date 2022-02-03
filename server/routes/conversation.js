const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const {
  createConversation,
  sendMessage,
  getAllConversations,
  getAllMessageByConversation,
} = require('../controllers/Conversation');

router.route('/createConversation').post(protect, createConversation);

router.route('/sendMessage').post(protect, sendMessage);

router.route('/getAllConversations').get(protect, getAllConversations);

router.route('/getAllMessageByConversation').get(protect, getAllMessageByConversation);

module.exports = router;