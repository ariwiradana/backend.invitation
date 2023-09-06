const express = require("express");
const router = express.Router();
const {
  getWishes,
  setWishes
} = require("../controller/wishes.controller");

router.route("/").get(getWishes).post(setWishes);
module.exports = router;
