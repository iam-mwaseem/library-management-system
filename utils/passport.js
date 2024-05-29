const localStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const bcrypt = require("bcrypt");
const db = require("../config/db");

const LocalAuthenticateUser = async (name, password, done) => {
  try {
    const user = await db.User.findOne({ where: { name: name } });

    if (!user) return done(null, false);
    const correct = await bcrypt.compare(password, user.password);

    if (!correct) return done(null, false);

    return done(null, user);
  } catch (error) {
    console.log(error);
    return done(null, error);
  }
};

const GoogleAuthenticateUser = async (
  request,
  accessToken,
  refreshToken,
  profile,
  done
) => {
  try {
    const user = await db.User.findOrCreate({ where: { name: profile.name } });
    return done(null, profile);
  } catch (error) {
    return done(null, error);
  }
};

module.exports = (passport) => {
  passport.use(
    //1.Google strategy
    new GoogleStrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/google/callback",
      },
      GoogleAuthenticateUser
    )
  );
  //2.local strategy
  passport.use(
    new localStrategy(
      {
        usernameField: "name",
        passwordField: "password",
      },
      LocalAuthenticateUser
    )
  );

  //3.Facebook strategy

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser(async (userId, done) => {
    try {
      const user = await db.User.findOne({ where: { id: userId } });

      done(null, user);
    } catch (error) {
      done(null, error);
    }
  });
};

/*


    const strategy = new localStrategy(authenticateUser);
    const strategy = new localStrategy({
      usernameField: "username",
      passwordField: "password",
    });

*/
