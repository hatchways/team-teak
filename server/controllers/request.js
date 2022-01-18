require('dotenv').config();
const Request = require('../models/Request');
const asyncHandler = require('express-async-handler');

// @route GET /request
// @desc get requests related to a logged in user or sitter
// @access Private
exports.requestGet = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const getUser = await Request.find({userId: userId})
  if(getUser){
    res.send(200).json({ success:{ message:  "get the " + getUser }});
  } else {
    res.status(404).send("user didn't exist.");
  }
});

// @route POST /request
// @desc post requests with user id and sitter id
// @access Private
exports.requestPost = asyncHandler(async (req, res) => {
  const { sitterId, start, end, offset } = req.body;
  const userId = req.user.id;
  const getUser = await Request.find({userId: userId});

  if(getUser){
    res.status(409).send("user is exist, can not be duplicate");
  } else {
    const postUser = await Request.create({ userId, sitterId, start, end, offset});
    res.send(201).json({ success:{ message:  "post the " + postUser + "success "}});
  }


// @route PUT /request/:id?status=approved or declined
// @desc update request status finding by id
// @access Private
exports.requestUpdate = asyncHandler(async (req, res, next) => {
    const { passRequest } = req.body;
    const getUser = await Request.findById(req.params.id);
    if(getUser == null ) {
      res.status(404).send("user didn't exist.");
    }

    if(passRequest){
      getUser.accepted = accepted;
    } else {
      getUser.declined = !accepted;
    }

    const requestUpdate = await getUser.save();
    res.status(200).json({ success:{ message:  "post the " + requestUpdate + "success "}});
  });
});