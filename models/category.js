const db = require("./../config/db");

module.exports = (sequelize, DataTypes, Model) => {
  class Category extends Model {}

  Category.init(
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        //   autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
