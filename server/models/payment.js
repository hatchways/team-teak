const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  sitterId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  rate: {
    type: Number,
    required: true,
  },
  hoursOfService: {
    type: Number,
    required: true,

  },
  totalPayment: {
    type: Number,
  },
  customerId : {
    type: String,
    default: "",
  },
  
});


paymentSchema.pre("save", async function (next) {
    if (this.isModified("rate") || this.isModified('hoursOfService')) {
        this.totalPayment = ( this.hoursOfService * this.rate ) + 5
    }
    next();
  });

module.exports = Payment = mongoose.model("Payment", paymentSchema);
