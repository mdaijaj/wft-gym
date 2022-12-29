const db = require("../model");
const config = require("../config/auth.config");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
// let {check, validationResult}= require("express-validator")

const User = db.user;
const Role = db.role;

const Op= db.Sequelize.Op;
// const { Op } = require("sequelize");

// const { user } = require("../model");

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var nameReg = /^[A-Za-z]*$/;
var regExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;


//signup
exports.signup = async (req, res) => {
  console.log("api is calling ...");
  try {
    const {first_name, last_name, email, mobile_number, password}= req.body;

    if (!first_name || !last_name ||  !email || !mobile_number || !password)  {
      return res.send("Can not be blank any fields...");
    }

    const userInfo = await User.create({
      first_name,
      last_name,
      email,
      mobile_number,
      password: bcrypt.hashSync(password, 8),
    });

    const roles=await Role.findAll({
      where: {
        name: {
          [Op.or]: req.body.roles
        }
      }
    })
    // const roleconnect= await User.setRoles(roles);
    if(roles){
      return res.status(200).send({
        status: "success",
        message: "Registration Success",
        statusCode: 200,
        data: userInfo,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      error: true,
      data: err,
    });
  }
};


//login
exports.signin = (req, res) => {

  // if (!req.body.mobile_number.match(regExp)) {
  //   return res.send("Mobile number only allow 10 digits");
  // }

  // if (!req.body.email.match(mailformat)) {
  //   return res.send(
  //     (message = "please Email valid format"),
  //   );
  // }

  User.findOne({
      where: { email: req.body.email,},
    })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "You are not Registered Please contect to Team",
        });
      }

      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      var authorities = [];
      user.getRoles().then((roles) => {
        console.log("roles", roles)
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        return res.status(200).send({
          id: user.id,
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          // roles: authorities,
          accessToken: token,
          status: user.status,
          message: "login successfully!"
        });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};


//logout 
exports.logout = (req, res) => {
  res.clearCookie("jwt");
  res.redirect("signin");
};


//all users list
exports.alluserlist = async (req, res) => {
  console.log("api is caliing....")
  const status = "active"
  try {
    const userData = await User.findAll({
     where:{ status :status}
    });
    // console.log(userData.first_name,"allData")
    if (userData) {
      res.status(200).send({ message: "All User List", data: userData });
    }
  } catch (err) {
    console.log(err.message);
    res.status(400).send({ message: "error", error: err.message });
  }
};


//all users list
exports.filterData = async (req, res) => {
  console.log("api is caliing....")
  const status = "active"
  const {email, first_name, mobile_number}= req.query  //role


  //optional
  // email? email: "";
  // first_name? first_name: "";
  // mobile_number? mobile_number: "";

  try {
    const userData = await User.findAll({
      where: {
        [Op.or]: [
          { mobile_number: mobile_number},
          { email: email },
          { first_name: first_name },
          { status: status },

        ]
      }
    });
    console.log("userData", userData)
    if (userData) {
      res.status(200).send({ message: "All User List", data: userData });
    }
  } catch (err) {
    console.log(err.message);
    res.status(400).send({ message: "error", error: err.message });
  }
};




//get user details
exports.userById = async (req, res) => {
  console.log(req.params, "data");
  const userId = parseInt(req.params.user_id);
  try {
    const UserData = await User.findOne({
      where: { user_id: userId, status: "active" },
    });
    if (!UserData) {
      res.status(400).send({ message: "User not found ", data: UserData });
    } 
    else{
      res.status(200).send({ message: "User Data ", data: UserData });
    }
  } catch (err) {
    console.log(err.message);
    res.status(400).send({ message: "error", error: err.message });
  }
};






