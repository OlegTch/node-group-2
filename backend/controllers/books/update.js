const { asyncHandler } = require("../../middlewares");
const Book = require("../../models/books/book");
const { HTTP_STATUS_CODE, HTTP_STATUS_MESSAGES } = require("../../libs");

const update = asyncHandler(async (req, res) => {
  const bookId = req.params.id;
  const book = await Book.findByIdAndUpdate(bookId, req.body, {
    new: true,
    runValidators: true,
  });

  if (!book) {
    res.status(HTTP_STATUS_CODE.NOT_FOUND);
    throw new Error("book not found");
  }

  res.status(HTTP_STATUS_CODE.OK).json({
    code: HTTP_STATUS_CODE.OK,
    status: HTTP_STATUS_MESSAGES.UA.OK,
    data: book,
  });
});

module.exports = update;
