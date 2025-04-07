const express = require("express");
const router = express.Router();
const controllerUsers = require("../controllers/users.controller");

// Users Routes
router
  .get("/", controllerUsers.getUsers)
  .get("/search", controllerUsers.getUsersByQuery)
  .get("/:uuid", controllerUsers.getUsersByuuid);

module.exports = router;
