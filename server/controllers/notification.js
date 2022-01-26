const NotificationSchema = require("../models/notification");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

// @route POST /notifications/
// @desc create notification
// @access Private
exports.createNotification = asyncHandler(async (req, res, next) => {
  const { type, title, description, recieverId } = req.body;

  const { id: userId } = req.user;

  const notification = await NotificationSchema.create({
    userId,
    type,
    title,
    description,
    recieverId,
  });

  if (notification) {
    return res.status(201).send({
      success: {
        notification,
      },
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @route PUT /notifications/read/:notificationId
// @desc set notification to read
// @access Private
exports.markNotificationRead = asyncHandler(async (req, res, next) => {
  const notificationId = req.params.notificationId;

  const { id: userId } = req.user;

  const notification = await NotificationSchema.findById(notificationId);

  if (notification) {
    if (userId !== notification.recieverId.toString()) {
      res.status(400);
      throw new Error("Not authorised to read this");
    }

    const updatedNotification = await NotificationSchema.findByIdAndUpdate(
      notificationId,
      { isRead: true },
      { new: true }
    ).select(["-__v"]);

    return res.status(200).send({
      message: "Notification read",
      notification: updatedNotification,
    });
  } else {
    res.status(404);
    throw new Error("Notification not found");
  }
});

// @route GET /notifications/
// @desc get all notifications
// @access Private
exports.fetctAllNotications = asyncHandler(async (req, res, next) => {
  const { id: userId } = req.user;

  const findAllByLoggedUser = await NotificationSchema.find({
    recieverId: userId,
  }).select(["-__v"]);

  return res.status(200).send({
    data: findAllByLoggedUser,
  });
});

// @route GET /notifications/unread
// @desc get all unnotifications
// @access Private
exports.fetctAllUnreadNotications = asyncHandler(async (req, res, next) => {
  const { id: userId } = req.user;

  const findAllByLoggedUser = await NotificationSchema.find({
    recieverId: userId,
    isRead: false,
  }).select(["-__v"]);

  return res.status(200).send({
    data: findAllByLoggedUser,
  });
});
