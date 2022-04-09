const errorHandler = (error, req, res, next) => {
  console.log("Error handler");
  console.log(res.statusCode);
};

// app.use((err, req, res, next) => {
//   res.status(500).json({ message: err.message });
// });

module.exports = errorHandler;
