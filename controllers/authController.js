const { where, Op, and } = require("sequelize");
const db = require("./../config/db");

const signup = async (req, res) => {
  let { name, email, password, passwordConfirm } = req.body;

  //  if (!email || !password) throw new Error("Please provide email and password");

  const user = await db.User.create({
    name,
    email,
    password,
    passwordConfirm,
  });

  return res.status(200).json({
    message: "Successfull",
    user,
  });
};

const signinWithEmailAndPassword = async (req, res) => {
  return res.status(200).json({
    message: "Successfully logged in",
    User: req.user,
  });
};
const signinWithGoogle = (req, res) => {
  return res.status(200).json({
    message: "successfully logged in using Google account",
    User: req.user,
  });
};

const signinWithFacebook = (req, res) => {};

const signinWithLinkdin = (req, res) => {};

const anonymousSignin = (req, res) => {};

const signout = (req, res) => {};

module.exports = {
  signup,
  signinWithEmailAndPassword,
  signinWithFacebook,
  signinWithGoogle,
  signinWithLinkdin,
  anonymousSignin,
  signout,
};
