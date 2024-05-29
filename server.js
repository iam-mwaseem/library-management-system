const db = require("./config/db");
const app = require("./app");

const dotenv = require("dotenv").config();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT} `);
});
