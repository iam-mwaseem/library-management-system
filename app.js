const express = require("express");
const passport = require("passport");
const expressSession = require("express-session");
const initializingPassport = require("./utils/passport");
const apiRoutes = require("./routes");

const app = express();

initializingPassport(passport);
app.use(express.json());
app.set("view engine", "ejs");
// Creates request.session object
app.use(
  expressSession({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/login", (req, res) => {
  res.render("login.ejs");
});

app.use("/google/callback", (req, res) => {
  res.send("<h1>You're successfully loggedIn</h1>");
});
app.use("/api", apiRoutes);
module.exports = app;
