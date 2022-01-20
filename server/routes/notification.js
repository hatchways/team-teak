const express = require("express");
const {
  createNotification,
  markNotificationRead,
  fetctAllNotications,
  fetctAllUnreadNotications,
} = require("../controllers/notification");
const router = express.Router();

const protect = require("../middleware/auth");
const { validateNotification } = require("../validate");

router
  .route("/create")
  .post([protect, validateNotification], createNotification);

router.route("/read/:notificationId").put(protect, markNotificationRead);

router.route("/").get(protect, fetctAllNotications);

router.route("/unread").get(protect, fetctAllUnreadNotications);

module.exports = router;
