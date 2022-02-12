const path = require("path");
const fs = require("fs/promises");

// console.log("__dirname:", __dirname);
// console.log("__filename:", __filename);
// console.log("join:", path.join());
// console.log("resolve:", path.resolve());

// const booksPath = path.join("../db/books.json");
// const booksPath = path.join(__dirname, "../db/books.json");
const booksPath = path.join(__dirname, "..", "db1", "books.json");

console.log(booksPath);

(async () => {
  try {
    const data = await fs.readFile(booksPath, { encoding: "utf8" });
    console.table(data);
  } catch (error) {
    console.log(error);
  }
})();
