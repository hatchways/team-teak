
const imageUrl = require("../models/imageUpload");
const asyncHandler = require('express-async-handler');
const util = require('util');
const { cloudinary } = require('../utils/cloudinary');

// @route POST /upload
// @desc insert user profile
// @access Private
exports.uploadPicture = asyncHandler(async (req, res, next) => {
 
    const userProfile = await Profile.findOne({ userId: req.user.id });

    if(!userProfile){
      res.status(404).send({
        message: "user profile doesn't exist "});
    }

    const fileString = req.body.files;

    try{
        const imageUrlPath = await cloudinary.uploader.upload(fileString);
        
        const imageUrlStringPath = imageUrlPath.url;

      res.status(200).json({ success: { message: "image update successfully!" }, data:{ imageUrlStringPath, } });
    } catch(err) {

      res.status(500).send({
        message: "update image fail "});
    }
  
});

