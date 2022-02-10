const mongoose = require("mongoose");
const Profile = require("./Profile");

const petSitterSchema = new mongoose.Schema({
  stripeConnectId: {
    type: String,
    required: true,
  },
  availabilityId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Availability",
  },
  activatedAvailabilitySchedule: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Schedule",
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
