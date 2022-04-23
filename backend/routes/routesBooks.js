const { add, get, getOne, remove, update } = require("../controllers/books");
const express = require("express");
const router = express.Router();

router.get("/", get);
router.get("/:id", getOne);
router.post("/", add);
router.delete("/:id", remove);
router.put("/:id", update);

module.exports = router;
