const mongoose = require("mongoose");
const Profile = require("./Profile");

const petSitterSchema = new mongoose.Schema({
  stripeConnectId: {
    type: String,
    required: true,
  },
  activatedAvailabilitySchedule: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Availability",
  },
  rate: {
    type: Number,
    min: 0,
    required: true,
  },
});

module.exports = PetSitter = Profile.discriminator(
  "PetSitter",
  petSitterSchema
);
