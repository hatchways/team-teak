const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");

// @route PUT /profile/edit
// @desc edit user profile
// @access Public
exports.editProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findOne({ userId: req.user.id });

  if (!profile) {
    res.status(404);
    throw new Error("Profile doesn't exist");
  }
  profile.set(req.body);
  const updatedProfile = await profile.save();
  res.status(200).json({
    success: {
      profile: updatedProfile,
    },
  });
});

// @route GET /profile/load
// @desc Get user profile data
// @access Private
exports.loadProfile = asyncHandler(async (req, res, next) => {
  const profile = await User.findById(req.user.id, "profile");

  if (!profile) {
    res.status(401);
    throw new Error("Not authorized");
  }

  res.status(200).json({
    success: {
      profile: profile,
    },
  });
});

// @route GET /users
// @desc Search for profiles
// @access Private
exports.searchProfiles = asyncHandler(async (req, res, next) => {
  const location = req.query.search;
  const date = req.query.date;

  let profile;
  if (location) {
    profile = await Profile.find({
      address: location,
    });
  }

  if (!profile) {
    res.status(404);
    throw new Error("No users found in search");
  }

  res.status(200).json({ users: profile });
});