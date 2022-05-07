const { check } = require("express-validator");

const { add, get, getOne, remove, update } = require("../controllers/books");
const express = require("express");
const router = express.Router();

const { bookSchemaValidator } = require("../middlewares");

router.get("/", get);
router.get("/:id", getOne);
// router.post("/", bookSchemaValidator, add);
router.delete("/:id", remove);
router.put("/:id", bookSchemaValidator, update);

module.exports = router;
