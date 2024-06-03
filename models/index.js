const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  }
);
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./user")(sequelize, DataTypes, Model);
db.Book = require("./book")(sequelize, DataTypes, Model);
db.Loan = require("./loan")(sequelize, DataTypes, Model);
db.LibraryCard = require("./libraryCard")(sequelize, DataTypes, Model);
db.Category = require("./category")(sequelize, DataTypes, Model);
db.Author = require("./author")(sequelize, DataTypes, Model);

// Associations
// db.User.hasOne(db.LibraryCard);

db.sequelize.sync({ alter: true });
module.exports = db;
