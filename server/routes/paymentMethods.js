const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");

const { getAllPaymentsMethod,
        createPaymentMethod, 
        getPaymentMethod,
        makePaymentMethod,
        cancelPaymentMethod,
         } = require("../controllers/paymentMethods");

router.route("/").get(protect, getAllPaymentsMethod);
router.route("/session").post(protect, createPaymentMethod);
router.route("/:id").get(protect, getPaymentMethod);
router.route("/:id/pay").put(protect, makePaymentMethod);
router.route("/:id/cancel").put(protect, cancelPaymentMethod);


module.exports = router;
