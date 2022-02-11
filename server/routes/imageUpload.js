const express = require('express');
const router = express.Router();
const { multerImageUpload } = require("../middleware/multer");


const protect = require('../middleware/auth');
const { uploadPicture } = require('../controllers/imageUpload')

router.route("/upload").post(multerImageUpload, protect, uploadPicture );

module.exports = router; 