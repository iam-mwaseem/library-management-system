const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
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

db.User = require("./user")(sequelize, DataTypes, Model);
db.Book = require("./book")(sequelize, DataTypes, Model);
db.Loan = require("./loan")(sequelize, DataTypes, Model);
db.LibraryCard = require("./libraryCard")(sequelize, DataTypes, Model);
db.Category = require("./category")(sequelize, DataTypes, Model);
db.Author = require("./author")(sequelize, DataTypes, Model);

// Associations
db.User.hasOne(db.LibraryCard);

db.sequelize.sync({ alter: true });
module.exports = db;
