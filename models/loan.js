const db = require(".");
module.exports = (sequelize, DataTypes, Model) => {
  class Loan extends Model {}

  Loan.init(
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        //   autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
      },

      book_id: {
        type: DataTypes.INTEGER,
      },

      loan_date: {
        type: DataTypes.DATE,
      },
      return_date: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Loan",
    }
  );
  return Loan;
};
