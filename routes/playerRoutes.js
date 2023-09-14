const express = require("express");
const router = express.Router();
const playerController = require("../controllers/playerController.js");



router.get("/:player_id/stats",playerController.getPlayer);

module.exports = router;
