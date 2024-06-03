const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT,
    dialect: "mysql",
    logging: false,
  }
);

async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./../models/user")(sequelize, DataTypes, Model);
db.Book = require("./../models/book")(sequelize, DataTypes, Model);
db.Loan = require("./../models/loan")(sequelize, DataTypes, Model);
db.LibraryCard = require("./../models/libraryCard")(
  sequelize,
  DataTypes,
  Model
);
db.Category = require("./../models/category")(sequelize, DataTypes, Model);
db.Author = require("./../models/author")(sequelize, DataTypes, Model);

// Associations
db.User.hasOne(db.LibraryCard);

db.sequelize.sync({ alter: true });
module.exports = db;
