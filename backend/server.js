const express = require("express");
const dotenv = require("dotenv");
const { engine } = require("express-handlebars");

const path = require("path");
const colors = require("colors");

const connectDB = require("../config/db");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// load env variables
dotenv.config({ path: path.resolve(__dirname, "..", "config", ".env") });

app.use(express.json());

// set data from form
app.use(express.urlencoded({ extended: false }));

// set template engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "views"));

// mount routes
app.get("/contact", (req, res) => {
  res.render("contact", { msg: "Oleg" });
});
app.post("/registration", (req, res) => {
  console.log(req.body);
});

// app.post("/books/form", (req, res) => {
//   // res.send(req.body);
//   // if (req.body.author) {
//   //   res.status(200).json({ message: "status OK" });
//   // }
//   // if (req.body.author || req.body.email) {
//   //   res.render("contact", { msg: "form success" });
//   // }
//   if (req.body.author || req.body.email) {
//     res.redirect("https://www.google.com/");
//   }
// });

const { validationResult } = require("express-validator");

// const { asyncHandler } = require("../../middlewares");
const Book = require("../backend/models/books/book");
const { HTTP_STATUS_CODE, HTTP_STATUS_MESSAGES } = require("../backend/libs");

app.post("/api/v1/books", async (req, res) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .render("notFound", { validationErrors: errors.array() });
  }

  const book = await Book.create(req.body);

  res.render(path.resolve(__dirname, "contact"), {
    msg: HTTP_STATUS_CODE.CREATED,
  });
});

app.use("/api/v1/books", require("./routes/routesBooks"));
app.use("/api/v1/users", require("./routes/routesUsers"));

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use(errorHandler);

connectDB();

const { PORT } = process.env || 5050;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
