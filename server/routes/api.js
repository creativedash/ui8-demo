const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

/* GET users listing. */
router.get("/users/:userId", userController.single);

module.exports = router;
