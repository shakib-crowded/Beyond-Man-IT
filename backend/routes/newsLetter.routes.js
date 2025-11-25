const express = require("express");
const { newsLetter } = require("../controller/newsLetter.controller");

const router = express.Router();

router.post("/newsletter", newsLetter);

module.exports = router;
