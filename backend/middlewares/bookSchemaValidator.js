const { check } = require("express-validator");

const bookSchemaValidator = [
  check("author", "express validator author error").notEmpty(),
  check("title", "express validator title error")
    .notEmpty()
    .isLength({ min: 2, max: 10 }),
  check("email", "express validator email error").normalizeEmail().isEmail(),
];

module.exports = bookSchemaValidator;
