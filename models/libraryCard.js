const db = require("./../config/db");
module.exports = (sequelize, DataTypes, Model) => {
  class LibraryCard extends Model {}

  LibraryCard.init(
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        //   autoIncrement: true,
        primaryKey: true,
      },

      user_id: {
        type: DataTypes.INTEGER,
        unique: true,
      },

      card_number: {
        type: DataTypes.STRING,
      },
      issue_date: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "LibraryCard",
    }
  );
  return LibraryCard;
};
