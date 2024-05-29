const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.getUser = async (req, res) => {
  const { id } = req.body;

  try {
    const user = await User.findOne({ where: { id } });
    if (!user) throw new Error("User doesnot exist!");

    return res.status(200).json({
      message: "Successfull",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = router;
