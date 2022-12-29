const express = require("express");
// const cors = require("cors");
const dotenv = require("dotenv");
var bodyParser = require('body-parser')
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const corsOpts = {
//   origin: "*",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type"],
// };
// app.use(cors(corsOpts));

// app.use(cors(corsOptions));
// parse requests of content-type - application/json

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/model");
const Role = db.role;
  

db.sequelize.sync({force: false})
.then(()=>{
  // initial()
  console.log("Synced db success...");
})
.catch((err)=>{
  console.log("Failed to sync db...", err.message)
})

// routes
require('./app/routes/user.routes')(app);
// require('./app/routes/auth.routes')(app);


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to WTF Fitnes Gym Application." });
});


// set port, listen for requests
const PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT, () => {
  console.log(` \u001b[1;32m Server is running on port ${PORT}. \u001b[0m`);
});

// function initial() {
//   Role.create({
//     id: 1,
//     name: "ADMIN"
//   });

//   Role.create({
//     id: 2,
//     name: "MEMBER"
//   });

//   Role.create({
//     id: 3,
//     name: "TRAINNER"
//   });
// }
