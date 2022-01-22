const { check, validationResult } = require("express-validator");

exports.validateRegister = [
  check("name", "Please enter a name").not().isEmpty(),
  check("email", "Please enter a valid email address").isEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({
    min: 6,
  }),
  (req, res, next) => {
    const errors = validationResult(req);

    console.log(errors);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];

exports.validateLogin = [
  check("email", "Please enter a valid email address").isEmail(),
  check("password", "Password is required").not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];

exports.validateAvailability = [
  check("name", "Name is required").not().isEmpty(),
  check("isActive", "isActive is not required").isBoolean(),
  check("monday.startTime", "Monday start time is required").not().isEmpty(),
  check("monday.endTime", "Monday end time is required").not().isEmpty(),
  check("tuesday.startTime", "Tuesday start time is required").not().isEmpty(),
  check("tuesday.endTime", "Tuesday end time is required").not().isEmpty(),
  check("wednesday.startTime", "Wednesday start time is required")
    .not()
    .isEmpty(),
  check("wednesday.endTime", "Wednesday end time is required").not().isEmpty(),
  check("thursday.startTime", "Thursday start time is required")
    .not()
    .isEmpty(),
  check("thursday.endTime", "Thursday end time is required").not().isEmpty(),
  check("friday.startTime", "Friday start time is required").not().isEmpty(),
  check("friday.endTime", "Friday end time is required").not().isEmpty(),
  check("saturday.startTime", "Saturday start time is required")
    .not()
    .isEmpty(),
  check("saturday.endTime", "Saturday end time is required").not().isEmpty(),
  check("sunday.startTime", "Sunday start time is required").not().isEmpty(),
  check("sunday.endTime", "Sunday end time is required").not().isEmpty(),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];
