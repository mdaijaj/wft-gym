const { verifySignUp, authJwt } = require("../middleware");

module.exports = app => {

  const controller = require("../controller/user.controller");

    // app.use(function(req, res, next) {
    //   res.header(
    //     "Access-Control-Allow-Headers",
    //     "x-access-token, Origin, Content-Type, Accept"
    //   );
    //   next();
    // });
  
    app.post("/api/user/signup", [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ], 
    controller.signup);
      
    app.post("/api/user/signin", controller.signin);

    app.get("/api/user/allusers",
    [authJwt.verifyToken], controller.alluserlist)

    //filter data
    app.get("/api/user/filterdata",
    [authJwt.verifyToken], controller.filterData)

    app.get("/api/user/userbyid/:user_id",
    [authJwt.verifyToken],
    controller.userById)
  
  };
  