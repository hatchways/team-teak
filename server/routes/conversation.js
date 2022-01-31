const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const {
  createConversation,
  sendMessage,
  getAllConversation,
  getAllMessageFormConversation,
} = require('../controllers/conversation');

router.route('/conversation/createConversation').post(protect, createConversation);

router.route('/conversation/sendMessage').post(protect, sendMessage);

router.route('/conversation/getAllConversation').get(protect, getAllConversation);

router.route('/conversation/getConversationByUserId').get(protect, getConversationByUserId);

module.exports = router;