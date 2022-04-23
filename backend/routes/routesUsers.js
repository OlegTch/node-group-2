const { getUser } = require("../controllers/users");
const express = require("express");
const router = express.Router();

router.get("/", getUser);

module.exports = router;
