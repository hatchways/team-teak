const User = require("../models/User");
const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

// @route POST /payment_methods/session
// @desc This will create a payment method
// @access Private
exports.createPaymentMethod = asyncHandler(async (req, res, next) => {
  // get current user id
  const userId = req.user.id;

  const userProfle = await Profile.findOne({ userId });

  const session = await stripe.checkout.sessions.create({
    success_url: "http://localhost:3000/dashboard",
    cancel_url: "http://localhost:3000/settings/payment-methods",
    payment_method_types: ["card"],
    mode: "setup",
    customer: userProfle.stripeAccountId,
  });

  const { url, id } = session;

  res.send({ url });

  const setupIntent = await stripe.setupIntents.create({
    customer: userProfle.stripeAccountId,
    payment_method_types: ["card"],
  });
});
