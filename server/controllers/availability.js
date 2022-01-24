const { Schedule, Availability } = require("../models/availability");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const match = require("nodemon/lib/monitor/match");
const { getAvailabilityData } = require("../utils/availabilityMockupData");

// @route POST /availability/create
// @desc Registers pet sitter availability
// @access Private
exports.registerAvailability = asyncHandler(async (req, res, next) => {
  const {
    name,
    isActive,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
  } = req.body;

  const userId = req.user.id;

  const hasActiveSchedule =
    isActive &&
    (await Availability.find({ userId, isActive })
      .then((res) => res)
      .catch((err) => err));

  if (hasActiveSchedule.length) {
    res.status(400);
    throw new Error("You already have an active schedule");
  }

  const availability = await Availability.create({
    name,
    userId,
    isActive,
  })
    .then((res) => res)
    .catch((err) => err);

  if (availability) {
    const availabilityId = availability._id;

    const schedule = await Schedule.create({
      availabilityId,
      isActive,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
    });

    if (schedule) {
      const { name, isActive } = availability;
      const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } =
        schedule;

      return res.status(201).send({
        data: {
          id: availabilityId,
          name,
          isActive,
          monday,
          tuesday,
          wednesday,
          thursday,
          friday,
          saturday,
          sunday,
        },
      });
    } else {
  
      try {
        await Availability.findByIdAndDelete(availabilityId);
      } catch (error) {
        res.status(500);
        throw new Error("Server error!");
      }

      return res.status(400).send({ error: "Invalid data" });
    }
  } else {
    return res.status(400).send({ error: "Invalid data" });
  }
});

// @route GET /availability/:scheduleId
// @desc returns data a specific availability id
// @access Private
exports.getSpecificSchedule = asyncHandler(async (req, res, next) => {
  const scheduleId = req.params.scheduleId;

  try {
    mongoose.Types.ObjectId(scheduleId);
  } catch (error) {
    throw new Error("Invalid id");
  }

  try {
    const conditions = { _id: mongoose.Types.ObjectId(scheduleId) };

    const availability = await getAvailabilityData(conditions);

    if (availability.length) {
      return res.status(200).send({ data: availability });
    } else {
      res.status(404).send({ error: "Schedule not found" });
    }
  } catch (error) {
    res.status(500);
    throw new Error();
  }
});

// @route GET /availability/active
// @desc returns a list of active schedule for all sitters available
// @access Private
exports.getActiveSchedules = asyncHandler(async (req, res, next) => {
  try {
    const conditions = { isActive: true };

    const availability = await getAvailabilityData(conditions);

    if (availability.length) {
      return res.status(200).send({ data: availability });
    } else {
      res.status(404).send({ error: "No Active schedules available" });
    }
  } catch (error) {
    res.status(500);
    throw new Error("Server error");
  }
});

// @route GET /availability/
// @desc returns a list of all scedules for logged in user
// @access Private
exports.getAllSchedulesForCurrentUser = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;

  try {
    mongoose.Types.ObjectId(userId);
  } catch (error) {
    throw new Error("Invalid id");
  }

  try {
    const conditions = { userId: mongoose.Types.ObjectId(userId) };

    const availability = await getAvailabilityData(conditions);

    if (availability.length) {
      return res.status(200).send({ data: availability });
    } else {
      res.status(404).send({ error: "Schedule not found" });
    }
  } catch (error) {
    res.status(500);
    throw new Error();
  }
});
