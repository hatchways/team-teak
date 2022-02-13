const User = require("../models/User");
const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

// @route POST /payments/
// @desc add payment
// @access Private
exports.addPayment = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;
  const { sitterId, rate, startTime, endTime } = req.body;

  const sitter = await User.findById(sitterId);
  if (!sitter) {
    res.status(404);
    throw new Error("Sitter does not exist");
  }

  const stripeAccountId = sitter.stripeAccountId;
  const hoursOfService = endTime - startTime;

  const createPayment = await Payment.create({
    sitterId,
    userId,
    stripeAccountId,
    rate,
    hoursOfService,
  });

  if (!createPayment) {
    res.status(400);
    throw new Error("Invalid Data");
  }
  return res.status(200).send({
    success: {
      payment: createPayment,
    },
  });
});

// @route GET /payments/:paymentId
// @desc fetch payment record by id
// @access Private
exports.getPayment = asyncHandler(async (req, res, next) => {
  const paymentId = req.params.paymentId;
  const payment = await Payment.findById(paymentId);
  if (!payment) {
    res.status(404);
    throw new Error("Payment not found");
  }
  return res.status(200).send({
    success: {
      payment: payment,
    },
  });
});

// @route Post /payments/:paymentId/pay
// @desc Make a payment
// @access Private
exports.makePayment = asyncHandler(async (req, res, next) => {
  const paymentId = req.params.paymentId;
  const userId = req.user.id;

  const payment = await Payment.findOne({ userId: userId, id: paymentId });

  if (!payment) {
    res.status(404);
    throw new Error("Payment doesn't exist");
  }

  const { totalPayment, stripeAccountId } = payment;

  try {
    await stripe.charges.create({
      customer: stripeAccountId,
      amount: totalPayment,
      currency: "cad",
      source: "Hatchways",
      description: `Made a payment of ${totalPayment}`,
    });
  } catch (error) {
    res.status(500);
    throw new Error("Payment was not completed");
  }

  payment.set({ paid: true });

  const updatedPayment = await payment.save();

  if (updatedPayment) {
    return res.status(200).send({
      success: {
        payment: updatedPayment,
        msg: "Payment Completed",
      },
    });
  }
});

// @route PUT /payments/:paymentId/cancel
// @desc cancel a payment
// @access Private
exports.cancelPayment = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;
  const paymentId = req.params.paymentId;

  const payment = await Payment.findOne({ id: paymentId, sitterId: userId });

  if (!payment) {
    res.status(404);
    throw new Error("Only merchant can cancel");
  }

  payment.set({ cancel: true });

  const updatedPayment = await payment.save();

  if (updatedPayment) {
    return res.status(200).send({
      success: {
        payment: updatedPayment,
      },
    });
  }
});

// @route GET /payments/
// @desc fetch all Payments
// @access Private
exports.getAllPayments = asyncHandler(async (req, res, next) => {
  const payments = await Payment.find({ userId: req.user.id });

  return res.status(200).send({
    success: {
      payments,
    },
  });
});
