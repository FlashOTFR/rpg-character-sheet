//Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

//Created Server
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Handlebars
<<<<<<< Updated upstream
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
=======
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Body-Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
>>>>>>> Stashed changes

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< Updated upstream
=======
//HTML Routes
app.get("/", (req, res) => res.render("home"));
app.get("/addchar", (req, res) => res.render("addchar"));
>>>>>>> Stashed changes

//HTML Routes
app.get('/', (req, res) => res.render('home'));
app.get('/dice', (req, res) => res.render('dice'));

//Database
const connection = require('./config/connection');

//Database connection test
connection.authenticate().then(() => console.log('Database Connected...')).catch(err => console.log('Error' + err));


require(`./routes/characters.js`)(app);
//Server listener
app.listen(PORT, console.log(`Server started on port ${PORT}`));