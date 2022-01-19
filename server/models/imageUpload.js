const mongoose = require("mongoose");

const timeSlot = new mongoose.Schema({ start: Date, end: Date });

const imageUploadSchema = new mongoose.Schema({
  imageUrlPath: {
    type: String,
    default: "",
    },
});

module.exports = ImageUrl = mongoose.model("imageUrl", imageUploadSchema);