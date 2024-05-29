const express = require("express");
const controller = require("./../controllers");

const router = express.Router();
router.get("/getuser", controller.userController.getUser);
module.exports = router;
