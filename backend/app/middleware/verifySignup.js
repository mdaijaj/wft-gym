const config = require("../config/auth.config");
const db = require("../model");
const ROLES = config.ROLEs;
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
//   // Username
  User.findOne({
    where: {
      mobile_number: req.body.mobile_number
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! Username or Mobile Number is already in use!"
      });
      return;
    }

    // Email
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }

      next();
    });
  })
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i].toUpperCase())) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i]
        });
        return;
      }
    }
  }

  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;
