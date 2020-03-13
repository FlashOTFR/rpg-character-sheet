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
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Body-Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//HTML Routes
app.get("/", (req, res) => res.render("home"));
app.get("/addchar", (req, res) => res.render("addchar"));
app.get('/dice', (req, res) => res.render('dice'));
app.get("/characters", (req, res) => {
    db.character
      .findAll()
      .then(characters => {
        console.log(characters.dexterity);
        res.render('characters', {
          characters
        });
      })
      .catch(err => console.log(err));
  });

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

//Server listener
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, console.log(`Server started on port ${PORT}`));
});

require(`./routes/characters.js`)(app);

