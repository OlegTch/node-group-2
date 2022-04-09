const { model, Schema } = require("mongoose");
const { VALIDATIONS_ERROR_CODE } = require("../../libs");
const { MONGOOSE_ERRORS } = VALIDATIONS_ERROR_CODE;
const bookSchema = Schema(
  {
    author: { type: String, required: [true, MONGOOSE_ERRORS.AUTHOR] },
    country: { type: String },
    imageLink: { type: String },
    language: { enum: ["en", "ua"], default: "ua" },
    title: {
      type: String,
      required: [true, MONGOOSE_ERRORS.TITLE],
      minLength: [MONGOOSE_ERRORS.MIN],
      maxLength: [MONGOOSE_ERRORS.MAX],
    },
    year: { type: Number },
    // user: { required: true, type: Schema.Types.ObjectId, ref: "user" },
  },
  { timestamps: true, versionKey: false }
);

module.exports = model("book", bookSchema);
