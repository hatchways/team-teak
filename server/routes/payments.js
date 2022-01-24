const express = require("express");
const { makePayment, getPaymentCards } = require("../controllers/payments");
const router = express.Router();
const protect = require("../middleware/auth");

router.route("/").post(protect, makePayment);

router.route("/").get(protect, getPaymentCards);

module.exports = router;
