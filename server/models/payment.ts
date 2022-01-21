const mongoose = require("mongoose");

export interface paymentType {
  sitterId: string;
  userId: string;
  rate: Number;
  hoursOfService: Number;
  totalPayment: string;
  customerId: string;
  createdAt: string;
  updatedAt: string;

}

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
  {
    timestamps: true,
  },
});


paymentSchema.pre("save", async function (next) {
    if (this.isModified("rate") || this.isModified('hoursOfService')) {
        this.totalPayment = ( this.hoursOfService * this.rate ) + 5
    }
    next();
  });

export default Payment = mongoose.model<paymentType>("Payment", paymentSchema);
