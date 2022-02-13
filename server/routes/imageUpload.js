const express = require('express');
const router = express.Router();


const protect = require('../middleware/auth');
const { uploadPicture } = require('../controllers/imageUpload')

router.route("/upload").post( protect, uploadPicture );

module.exports = router; 