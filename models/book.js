const db = require("./index");

module.exports = (sequelize, DataTypes, Model) => {
  class Book extends Model {}

  Book.init(
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        //   autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
      },

      author_id: {
        type: DataTypes.INTEGER,
      },

      category_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
