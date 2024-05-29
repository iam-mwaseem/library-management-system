const express = require("express");
const passport = require("passport");

const authController = require("../controllers/authController");
const router = express.Router();

router.post("/signup", authController.signup);
router.post(
  "/signin",
  passport.authenticate("local"),
  authController.signinWithEmailAndPassword
);

router.get(
  "/signinwithgoogle",
  passport.authenticate("google", { scope: ["email", "profile"] }),
  authController.signinWithGoogle
);
module.exports = router;
