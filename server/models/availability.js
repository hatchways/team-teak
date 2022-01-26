const mongoose = require("mongoose");

const availabilitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Profile",
  },
  isActive: {
    type: Boolean,
    required: true,
    default: false,
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});

const scheduleSchema = new mongoose.Schema({
  availabilityId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "availability",
  },
  monday: {
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
  },
  tuesday: {
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
  },
  wednesday: {
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
  },
  thursday: {
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
  },
  friday: {
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
  },
  saturday: {
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
  },
  sunday: {
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
  },
});

module.exports = {
  Availability: mongoose.model("availability", availabilitySchema),
  Schedule: mongoose.model("schedule", scheduleSchema),
};
