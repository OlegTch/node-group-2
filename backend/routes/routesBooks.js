const { add, get } = require("../controllers/books");
const express = require("express");
const router = express.Router();

router.get("/", get);
router.post("/", add);

module.exports = router;
