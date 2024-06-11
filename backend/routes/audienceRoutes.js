const express = require("express");
const {
  createAudience,
  getAudiences,
} = require("../controllers/audienceController");

const router = express.Router();

router.post("/", createAudience);
router.get("/", getAudiences);

module.exports = router;
