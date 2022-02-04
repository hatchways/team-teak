const express = require("express");
const {
  createNotification,
  markNotificationRead,
  fetctAllNotications,
  fetctAllUnreadNotications,
} = require("../controllers/notification");
const router = express.Router();

const protect = require("../middleware/auth");
const {
  validateNotification,
  validateRequestParameter,
} = require("../validate");

router.route("/").post([protect, validateNotification], createNotification);

router
  .route("/read/:notificationId")
  .put([protect, validateRequestParameter], markNotificationRead);

router.route("/").get(protect, fetctAllNotications);

router.route("/unread").get(protect, fetctAllUnreadNotications);

module.exports = router;
