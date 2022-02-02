require('dotenv').config();
const Request = require('../models/Request');
const asyncHandler = require('express-async-handler');

// @route GET /request
// @desc get requests related to a logged in user or sitter
// @access Private
exports.getRequest = asyncHandler(async (req, res) => {
  const request = await Request.find({userId: req.user.id});
  if(request){
    res.send(200).json({ success:{ message:  `get the ${request}` }});
  } else {
    res.status(404).send("user id didn't exist.");
  }
});

// @route POST /request
// @desc post requests with user id and sitter id
// @access Private
exports.postRequest = asyncHandler(async (req, res) => {
  const { sitterId, start, end, offset } = req.body;
  const userId = req.user.id;
  
  const request = await Request.create({ userId, sitterId, start, end, offset});
  res.send(201).json({ success:{ message:  `post the ${request}  success `}});
  
});


// @route PUT /request/:id?status=approved or declined
// @desc update request status finding by id
// @access Private
exports.updateRequest = asyncHandler(async (req, res, next) => {
    const request = await Request.findById(req.params.id);
    if(!request) {
      res.status(404).send("request didn't exist.");
    } else {
      const requestUpdate = await request.save();
      res.status(200).json({ success:{ message:  `post the ${requestUpdate} success `}});
    }


    
  });
