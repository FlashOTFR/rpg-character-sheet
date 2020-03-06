"use strict";

const express = require('express');
const router = express.Router();
const db = require('../config/connection');
const Character = require('../models/character');

router.get('/', (req, res) =>
Character.findAll()
.then(characters => {
    console.log(characters.title);
    res.sendStatus(200);
})
.catch(err => console.log(err)));

module.exports = router;

