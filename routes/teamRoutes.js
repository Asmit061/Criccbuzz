const express = require("express");
const router = express.Router();
const playerController = require("../controllers/playerController.js");
const { authenticateUser } = require("../middleware/authMiddleware.js");

router.post("/:team_id/squad",authenticateUser,playerController.addPlayer);

module.exports = router;