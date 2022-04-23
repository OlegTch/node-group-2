const { asyncHandler } = require("../../middlewares");
const Book = require("../../models/books/book");
const { HTTP_STATUS_CODE, HTTP_STATUS_MESSAGES } = require("../../libs");

const add = asyncHandler(async (req, res) => {
  // res.send(req.body);
  const book = await Book.create(req.body);

  res.status(HTTP_STATUS_CODE.CREATED).json({
    code: HTTP_STATUS_CODE.CREATED,
    status: HTTP_STATUS_MESSAGES.UA.CREATED,
    data: book,
  });
});

module.exports = add;

// <input type="text" name="author">
// <input type="text" name="country">
// <input type="number" name="year">
// <input type="email" name="email">
