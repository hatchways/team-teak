const mongoose = require("mongoose");

const availabilitySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  petSitterId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = Availability = mongoose.model(
  "availibility",
  availabilitySchema
);
it;
