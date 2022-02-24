const User = require("../models/User");
const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const PaymentMethod = require("../models/payment");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

// @route POST /payment_methods/session
// @desc This will create a payment method
// @access Private
exports.createPaymentMethod = asyncHandler(async (req, res, next) => {
  
console.log("++++++++++++");

  const userId = req.user.id;

  const userProfle = await Profile.findOne({ userId });

  let session;
  try {
    session = await stripe.checkout.sessions.create({
      success_url: "http://localhost:3000/dashboard",
      cancel_url: "http://localhost:3000/settings/payment-methods",
      payment_method_types: ["card"],
      mode: "setup",
      customer: userProfle.stripeAccountId,
      userId: userProfle.userId,

    });
  } catch (error) {
    res.status(400);
    throw new Error("Checkout session not created");
  }

  const { url, id } = session;

  res.send({ url });

  try {
    const setupIntent = await stripe.setupIntents.create({
      customer: userProfle.stripeAccountId,
      payment_method_types: ["card"],
    });
  } catch (error) {
    res.status(400);
    throw new Error("SetupIntent not created");
  }

  const payment = await PaymentMethod.create({
    sitterId: userProfle.sitterId,
    userId: userProfle.userId,
    rate: userProfle.rate,
    paymentIntentId: setupIntent.id,
    hoursOfService: userProfle.hoursOfService,
  })

  if(payment){
    res.status(201).json({
      data: {
        payment,
        paymentIntend,
      },
    });
  } else {

    res.status(400).send("Payment data is not valid ");

  }
});


// @route GET /payments
// @desc Get all payment from user
// @access Private
exports.getAllPaymentsMethod = asyncHandler(async (req, res, next) => {
 
   console.log("----------------------------");
   const {   sitterId, rate, hoursOfService } = req.body;


  const paymentMethod = await PaymentMethod.find({ userId: req.user.id });


  if(paymentMethod){
    res.status(200).json({
      success: {
        paymentMethod: paymentMethod,
      },
    });
  } else {
    res.status(404).send("Payments Not Found");
  }

  
});


// @route GET /payment_methods/:id
// @get all payment from each user id
// @access Private
exports.getPaymentMethod = asyncHandler(async (req, res, next) => {

  const {id} = req.params;
  const paymentMethod = await PaymentMethod.findById(id);

  if( paymentMethod ){
    res.status(200).json({
      success: { paymentMenthod: paymentMethod },
    });
  } else {
    res.status(404).send("Payment is empty");    
  }

});


// @route PUT /payments/:id/pay
// @desc Pay current unpaid payment
// @access Private
exports.makePaymentMethod = asyncHandler(async( req, res, next) => {

  const { id } = req.params;
  const paymentMethod = await PaymentMethod.findOne({id});

  if(!paymentMethod){
    res.status(404).send("Payment dose not exist")
  }

  if(paymentMethod.paid){
    res.status(400).send("Payment already made");
  }


  const paymentConfirm = await stripe.paymentIntents.confirm(payment.paymentIntendId, {
    payment_method: "visa_card",
  });

  if(!paymentConfirm){
    res.status(500).send("some unexpected happen");
  }

  payment.set({ paid: true });
  const updatePayment = await payment.save();
  if( updatePayment ){
    res.status(200).json({
      success: {
        message: "Payment Confirm",
        payment: updatePayment,
        paymentConfirmation: paymentConfirmation,
      },
    });

  }

});



// @route PUT /payments/:id/cancel
// @desc Cancel current payment
// @access Private
exports.cancelPaymentMethod = asyncHandler(async (req, res, next) => {

  const { id } = req.params;
  const paymentMethod = await PaymentMethod.findOne({ _id: id});

  const cancelPayment = await stripe.paymentIntents.cancel(payment.paymentIntendId);

  if(!paymentIntent){
    res.status(500).send("cancel api goes wrong");
  }

  payment.set({ cancel: true });
  const updatePaymentMethod = await paymentMethod.save();

  if(updatePaymentMethod){
    res.status(200).json({
      success:{
        message: "Cancel Payment",
        payment: updatePaymentMethod,
        paymentMethod: cancelPayment,

      }
    })
  }


});

