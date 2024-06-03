const dotenv = require("dotenv").config({ path: "./.env" });
const sequelize = require("./config/db");
const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT} `);
  async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
});
