const NotificationSchema = require("../models/notification");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

// @route POST /notifications/create
// @desc create notification
// @access Private
exports.createNotification = asyncHandler(async (req, res, next) => {
  const { type, title, description, recieverId } = req.body;

  const { id: userId } = req.user;

  try {
    mongoose.Types.ObjectId(recieverId);
  } catch (error) {
    throw new Error("Invalid id");
  }
  const notification = await NotificationSchema.create({
    userId,
    type,
    title,
    description,
    recieverId,
  })
    .then((res) => res)
    .catch((err) => err);

  if (notification) {
    return res.status(201).send({
      success: {
        notification: {
          id: notification._id,
          type: notification.type,
          title: notification.title,
          description: notification.description,
          isRead: notification.isRead,
        },
      },
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @route PUT /notifications/read/:notificationID
// @desc create notification
// @access Private
exports.markNotificationRead = asyncHandler(async (req, res, next) => {
  const notificationId = req.params.notificationId;

  const { id: userId } = req.user;

  try {
    mongoose.Types.ObjectId(notificationId);
  } catch (error) {
    res.status(404);
    throw new Error("Invalid id");
  }

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
    )
      .select(["-__v"])
      .then((res) => res)
      .catch((err) => err);

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
  })
    .select(["-__v"])
    .then((res) => res)
    .catch((err) => err);

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
  })
    .select(["-__v"])
    .then((res) => res)
    .catch((err) => err);

  return res.status(200).send({
    data: findAllByLoggedUser,
  });
});
