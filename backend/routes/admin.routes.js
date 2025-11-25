const express = require("express");
const {
  login,
  dashboard,
  projectReview,
  callReview,
  callDelete,
  projectDelete,
  newsLettersDelete,
  contactReview,
  contactDelete,
} = require("../controller/admin.controller");
const adminAuth = require("../middlewares/adminAuth");

const router = express.Router();

router.get("/dashboard", adminAuth, dashboard);
router.get("/project-review", adminAuth, projectReview);
router.get("/project-delete", adminAuth, projectDelete);

router.get("/call-review", adminAuth, callReview);
router.get("/call-delete", adminAuth, callDelete);

router.get("/newsletter-delete", adminAuth, newsLettersDelete);

router.get("/contact-review", adminAuth, contactReview);
router.get("/contact-delete", adminAuth, contactDelete);

router.post("/login", login);

module.exports = router;
