//Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

const db = require("./models");

//Created Server
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Body-Parser
app.use(bodyParser.urlencoded({ extended: false }));

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

//HTML Routes
app.get("/", (req, res) => res.render("home"));

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, console.log(`Server started on port ${PORT}`));
});

//Database
// const connection = require('./config/connection');

//Database connection test
// connection.authenticate().then(() => console.log('Database Connected...')).catch(err => console.log('Error' + err));

require(`./routes/characters.js`)(app);
//Server listener
