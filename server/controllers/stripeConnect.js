const User = require("../models/User");
const Profile = require("../models/Profile");

const asyncHandler = require("express-async-handler");
const availability = require("../models/availability");
const PetSitter = require("../models/PetSitter");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

// @route POST /connect/stripe
// @desc user connects to stripe and creates account link
// @access Public
exports.stripeConnect = asyncHandler(async (req, res, next) => {
  const { rate } = req.body;
  const userId = req.user.id;
  const profile = await Profile.findOne().where("userId").equals(userId);
  const currentUser = await User.findById(userId);
  const activeSchedule = await availability.findOne({
    profileId: profile._id,
    isActive: true,
  });

  const activeScheduleId = activeSchedule._id;

  const account = await stripe.accounts.create({
    type: "standard",
    country: "CA",
    email: currentUser.email,
    default_currency: "CAD",
    business_type: "individual",
    capabilities: {
      card_payments: { requested: true },
      transfers: { requested: true },
    },
    company: {
      name: profile.name,
    },
  });

  const { id } = account;
  console.log(id, rate);
  const rateInCents = rate * 100;
  const petSitter = await PetSitter.create({
    id,
    activeScheduleId,
    rateInCents,
  });

  await stripe.accountLinks.create({
    account: id,
    refresh_url: "http://localhost:3000/settings/payment-methods",
    return_url: "http://localhost:3000/dashboard",
    type: "account_onboarding",
  });

  return res.status(201).send({ success: petSitter });
});
