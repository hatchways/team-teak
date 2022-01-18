
const imageUrl = require("../models/imageUpload");
const asyncHandler = require('express-async-handler');
const util = require('util');
const { cloudinary } = require('../utils/cloudinary');

// @route POST /upload
// @desc insert user profile
// @access Private
exports.uploadPicture = asyncHandler(async (req, res, next) => {
 
    // const {
    //     fileString,
    // } = req.body.data;


    // const imagePath = await imageUrl.findById(req.body.id);
    const fileString = req.body.files;
    // if(fileString != null){
    //     fileString = "";
    //     await cloudinary.
    // }

    try{
        const uploadedReponse = await cloudinary.uploader.upload(fileString, {
            upload_preset: 'ml_default'
        })
        imageUrl.create({})

      res.status(200).json({ success: { message: "image update successfully!" } });
    //   res.json({message: " upload success "});
    } catch(err) {

      res.status(500).send({
        message: "update image fail "});
        // res.json({message: " upload fail "});

    }
  
});

