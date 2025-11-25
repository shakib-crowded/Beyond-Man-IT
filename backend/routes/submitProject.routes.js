const express = require("express");
const { submitProject } = require("../controller/submitProject.controller");
const router = express.Router();

router.post("/submit-project", submitProject);

module.exports = router;
