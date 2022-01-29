const socketIo = require("socket.io");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async (server, app) => {
  let currentUser, token;

  app.use(async (req, res, next) => {
    token = req.cookies.token;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    currentUser = await User.findById(decoded.id);

    next();
  });

  const io = socketIo(server, {
    cors: {
      origin: "*",
    },
  });

  app.use((req, res, next) => {
    req.io = socketIo;
    next();
  });

  io.on("authorization", (handshake, callback) => {
    handshake.token = token;
    handshake.user = currentUser;
    callback(null, true);
  });

  io.sockets.on("connection", (socket) => {
    console.log({ token: socket.handshake.token, user: socket.handshake.user }); // bar
  });

  let interval;

  io.on("connection", (socket) => {
    if (interval) {
      clearInterval(interval);
    }
    interval = setInterval(() => getAndEmitMessage(socket), 1000);
    socket.on("disconnect", () => {
      clearInterval(interval);
    });

    const getAndEmitMessage = (socket) => {
      socket.emit("message", currentUser);
    };
  });
};
