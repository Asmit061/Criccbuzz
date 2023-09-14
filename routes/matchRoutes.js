const express = require("express");
const router = express.Router();
const matchController=require("../controllers/matchController.js")
const { authenticateUser } = require("../middleware/authMiddleware.js");

router.post("/",authenticateUser,matchController.creatematch);
router.get("/", matchController.getMatches);
router.get("/:match_id", matchController.getspecificMatch);

module.exports = router;