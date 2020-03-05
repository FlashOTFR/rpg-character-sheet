"use strict";

// similar fashion to video

const express = require("express");
const router = express.Router();
const db = require("../config/connection.js");
const Character = require("../models/Character");

router.get("/", (req, res) =>
  Character.findAll()
    .then(Characters => {
      console.log(Characters);
      res.sendStatus(200);
    })
    .catch(err => console.log(err))
);

module.exports = router;
