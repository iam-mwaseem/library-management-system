const dotenv = require("dotenv").config({ path: "./.env" });
const db = require("./models/index");
const app = require("./app");

const startServer = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Connection has been established successfully.");

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on ${process.env.PORT} `);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
