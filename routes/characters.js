"use strict";

const express = require('express');
const router = express.Router();
const connection = require('../config/connection');
const Character = require('../models/character');

router.get('/', (req, res) =>
db.Character.findAll()
.then(characters => {
    console.log(characters);
    res.sendStatus(200);
})
.catch(err => console.log(err)));

module.exports = router;

