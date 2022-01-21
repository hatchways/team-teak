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

const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  periods: {
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
  },
});

module.exports = Schedule = mongoose.model("Schedule", scheduleSchema);
