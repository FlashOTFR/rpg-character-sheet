"use strict";


const express = require('express');
const connection = require('../config/connection');
const db = require('../models/index');

module.exports = app => {
  //Get all characters
  app.get("/characters", (req, res) =>
    db.character
      .findAll()
      .then(dbcharacters => {
        console.log(dbcharacters);
        res.render("characters", {
          dbcharacters
        });
      })
      .catch(err => console.log(err))
  );

  //Add a character
  // app.get('/add', (req, res) => {

  // })

  // Character.create({

  // }).then(character => res.redirect('/characters'))
  // .catch(err => console.log(err));
};
