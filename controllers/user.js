const db = require("../config/db");

exports.getUser = async (req, res) => {
  const { id } = req.body;

  try {
    const user = await db.User.findOne({ where: { id } });
    if (!user) throw new Error("User doesnot exist!");

    return res.status(200).json({
      message: "Successfull",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
