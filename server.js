//Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

//Created Server
const app = express();
const PORT = process.env.PORT || 3000;

//Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));


//Get LANDING PAGE
app.get('/', (req, res) => res.send('LANDING PAGE HERE'));

//Database
const connection = require('./config/connection');

//Database connection test
connection.authenticate().then(() => console.log('Database Connected...')).catch(err => console.log('Error' + err));


require(`./routes/characters.js`)(app);
//Server listener
app.listen(PORT, console.log(`Server started on port ${PORT}`));