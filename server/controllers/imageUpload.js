
const imageUrl = require("../models/imageUpload");
const asyncHandler = require('express-async-handler');
const util = require('util');
const { cloudinary } = require('../utils/cloudinary');
const { dataUri } = require("../middleware/multer");

// @route POST /upload
// @desc insert user profile
// @access Private
exports.uploadPicture = asyncHandler(async (req, res, next) => {
 
    const userId = req.user.id;
    const fileString = req.body.files;

    try{
        const file = dataUri(req.file).content;

        const imageUrlPath = await cloudinary.uploader.upload(file, { folder: `profile_image/${userId}`});
        
        const imageUrlStringPath = imageUrlPath.url;

      res.status(200).json({ success: { message: "image update successfully!" }, data:{ imageUrlStringPath, } });
    } catch(err) {

      res.status(500).send({
        message: "update image fail "});
    }
  
});

