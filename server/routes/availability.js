const express = require("express");

const {
  registerAvailability,
  getSpecificSchedule,
  getActiveSchedules,
  getAllSchedulesForCurrentUser,
} = require("../controllers/availability");

const router = express.Router();

const protect = require("../middleware/auth");

const { validateAvailability } = require("../validate");

router.route("/").get(protect, getAllSchedulesForCurrentUser);

router
  .route("/create")
  .post([protect, validateAvailability], registerAvailability);

router.route("/active").get(protect, getActiveSchedules);

router.route("/:scheduleId").get(protect, getSpecificSchedule);

module.exports = router;
