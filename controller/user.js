const db = require("../models");
const response = require("../res");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.user.findOne({
      where: {
        email: email,
      },
    });

    console.log(user);

    if (user === null) {
      return response.error(`User not found`, res);
    }

    bcrypt.compare(password, user.password, function (err, match) {
      if (err) {
        response.error("ERR-COMPARE", res);
        return false;
      }

      if (!match) {
        response.error(`Password does'nt match`, res);
        return false;
      }
      console.log(user);

      response.ok(
        {
          id: user.id,
          group: user.user_role_id,
        },
        res,
        true
      );
    });
  } catch (error) {
    console.error(error);
    response.error(`${error}`, res);
  }
};

exports.signup = async (req, res) => {
  const params = req.body;
  try {
    const checkUser = await db.user.findOne({
      where: {
        email: params.email,
      },
    });

    if (checkUser) {
      response.error(
        "Email atau username " +
          params.email +
          " sudah terdaftar pada sistem kami.",
        res
      );
      return false;
    }

    bcrypt.hash(params.password, saltRounds, async (err, hash) => {
      if (err) {
        console.log(err);
        response.error("ERR-HASH", res);
        return false;
      }
      const user = await db.user.create({
        name: params.name,
        email: params.email,
        password: hash,
        status: true,
        user_role_id: 1,
      });

      response.ok(user, res);
    });
  } catch (error) {
    response.error(error, res);
  }
};
