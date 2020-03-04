//Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

//Created Server
const app = express();
const PORT = process.env.PORT || 3000;

//Get LANDING PAGE
app.get('/', (req, res) => res.send('LANDING PAGE HERE'));

//Database
const db = require('./config/connection');

//Database connection test
db.authenticate().then(() => console.log('Database Connected...')).catch(err => console.log('Error' + err));

//Server listener
app.listen(PORT, console.log(`Server started on port ${PORT}`));