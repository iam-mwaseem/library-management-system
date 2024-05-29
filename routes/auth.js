const express = require("express");
const passport = require("passport");

const controller = require("./../controllers");
const router = express.Router();

router.post("/signup", controller.authController.signup);
router.post(
  "/signin",
  passport.authenticate("local"),
  controller.authController.signinWithEmailAndPassword
);

router.get(
  "/signinwithgoogle",
  passport.authenticate("google", { scope: ["email", "profile"] }),
  controller.authController.signinWithGoogle
);
module.exports = router;
