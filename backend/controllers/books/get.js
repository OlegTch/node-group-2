const { asyncHandler } = require("../../middlewares");
const Book = require("../../models/books/book");
const { HTTP_STATUS_CODE, HTTP_STATUS_MESSAGES } = require("../../libs");

const get = asyncHandler(async (req, res) => {
  const books = await Book.find({});

  res.status(HTTP_STATUS_CODE.OK).json({
    code: HTTP_STATUS_CODE.OK,
    status: HTTP_STATUS_MESSAGES.UA.OK,
    data: books,
    total: books.length,
  });
});

module.exports = get;
