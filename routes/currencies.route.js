const express = require("express");
const router = express.Router();
const {
  getCurrencies,
  getSingleCurrencies,
} = require("../controllers/currencies.controller");

// Routes
router.route("/").get(getCurrencies);
router.route("/:symbol").get(getSingleCurrencies);

module.exports = router;
