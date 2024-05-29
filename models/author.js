const db = require("./../config/db");

module.exports = (sequelize, DataTypes, Model) => {
  class Author extends Model {}

  Author.init(
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

      bio: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Author",
    }
  );

  return Author;
};
