const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const {
  createConversation,
  sendMessage,
  getAllConversations,
  getAllMessageByConversation,
} = require('../controllers/conversation');

router.route('/conversation/createConversation').post(protect, createConversation);

router.route('/conversation/sendMessage').post(protect, sendMessage);

router.route('/conversation/getAllConversations').get(protect, getAllConversations);

router.route('/conversation/getAllMessageByConversation').get(protect, getAllMessageByConversation);

module.exports = router;