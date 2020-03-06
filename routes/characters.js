"use strict";

const express = require('express');
const router = express.Router();
const connection = require('../config/connection');
const db = require('../models/index');

module.exports = app => {
app.get('/characters', (req, res) =>
db.character.findAll()
.then(dbCharacters => {
    console.log(dbCharacters);
    res.sendStatus(200);
})
.catch(err => console.log(err)));


};
