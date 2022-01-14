const User = require("../models/User");
const mongoose = require("mongoose");
const createDemoUserDetails = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const email = process.env.DEMO_USER_EMAIL;
  const password = process.env.DEMO_USER_PASSWORD;
  const name = "Demo Account";

  await User.create({
    name,
    email,
    password,
  })
    .then((res) => res)
    .catch((err) => console.log("something is work", err));

  console.log({
    message: "Demo user created successfully! Press crtl + c to exit",
  });
};

createDemoUserDetails();
