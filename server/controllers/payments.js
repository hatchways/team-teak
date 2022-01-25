const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const CardDetails = require("../models/payments");

// @route POST /payment
// @desc This will help in making payments
// @access Private
exports.makePayment = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;

  const { price, token } = req.body;

  const {
    id,
    card: { brand, last4, name, exp_month, exp_year },
    email,
  } = token;

  const cardDetials = await CardDetails.find({ lastFour: last4 })
    .then((res) => res)
    .catch((err) => err);

  if (!cardDetials.length) {
    const exp = `${exp_month}/${exp_year.toString().slice(-2)}`;

    await CardDetails.create({
      userId,
      name,
      email,
      lastFour: last4,
      cardType: brand,
      expirelyDate: exp,
    })
      .then((res) => res)
      .catch((err) => err);
  }
  return await stripe.customers
    .create({
      email: email,
      source: id,
    })
    .then((customer) => {
      stripe.charges.create({
        amount: price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: email,
        description: `Pay for a sitter`,
        shipping: {
          name: name,
          address: {
            country: token.card.address_country,
          },
        },
      });
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

// @route GET /payment/
// @desc This endpoint will return all card history of the current logged in user
// @access Private
exports.getPaymentCards = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;

  const cardDetials = await CardDetails.find({ userId })
    .then((res) => res)
    .catch((err) => err);

  return res.status(200).send({
    success: {
      data: cardDetials,
    },
  });
});
