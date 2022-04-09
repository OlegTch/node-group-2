const express = require("express");
const dotenv = require("dotenv");

const path = require("path");
const colors = require("colors");

const connectDB = require("../config/db");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// load env variables
dotenv.config({ path: path.resolve(__dirname, "..", "config", ".env") });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// mount routes
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
