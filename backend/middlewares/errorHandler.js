const ErrorRes = require("../helpers/errorRes");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  let error = { ...err };
  error.message = err.message;
  error.stack = err.stack;

  if (error.name === "CastError") {
    const message = "Invalid format. Not found";
    error = new ErrorRes(message, statusCode);
  }
  if (error.name === "Error") {
    const message = "Not found";
    error = new ErrorRes(message, statusCode);
  }
  if (error.code === 11000) {
    const message = `Dublicate field ${Object.keys(error.keyValue)} value`;
    error = new ErrorRes(message, statusCode);
  }

  const mode = process.env.NODE_ENV === "production" ? null : error.stack;

  res.status(statusCode).json({
    error: error.message || "Server error",
    trace: mode,
  });
};

// app.use((err, req, res, next) => {
//   res.status(500).json({ message: err.message });
// });

module.exports = errorHandler;
