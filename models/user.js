const bcrypt = require("bcrypt");
const db = require("./../config/db");

module.exports = (sequelize, DataTypes, Model) => {
  class User extends Model {}

  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        // unique: true,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      passwordConfirm: {
        type: DataTypes.STRING,
      },
      library_card_id: {
        type: DataTypes.INTEGER,
        // unique,
        //   autoIncrement: true,
      },
    },
    {
      sequelize,
      //Model wide validation
      // validate: {
      //   isPasswordMatched() {
      //     if (this.password !== this.passwordConfirm) {
      //       throw new Error("Your password doesnot matched");
      //     }
      //   },
      // },
      modelName: "User",
    }
  );
  User.addHook("beforeSave", async (user, options) => {
    console.log(user, options);
    const hashedPassword = await bcrypt.hash(user.password, 12);
    user.password = hashedPassword;
    user.passwordConfirm = undefined;
  });
  return User;
};
