'use strict';

const express = require('express');
const connection = require('../config/connection');
const db = require('../models');

module.exports = app => {
  //Get all characters
  app.get('/characters', (req, res) => {
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

  app.get('/c', (req, res) => {
    db.character.create({
      name: 'Randy',
      class: 'Rogue',
      level: 10,
      background: 'No Background',
      player_name: 'also Randy',
      faction: 'warlords of carthus',
      race: 'lizard folk',
      alignment: 'chaotic good',
      exp: 2000,
      inspiration: 1,
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
      strength_st: 10,
      dexterity_st: 10,
      constitution_st: 10,
      intelligence_st: 10,
      wisdom_st: 10,
      charisma_st: 10,
      armor_class: 5,
      initiative: 10,
      speed: 10,
      current_hp: 200,
      temp_hp: 200,
      personality_traits: 'Just a regular ol dude',
      ideals: 'ideally would like to be a coder',
      bonds: 'no bonds',
      flaws: 'interrupts people',
      attacks_and_spellcasting: 'Balrog has lots and lots of powers',
      passive_wisdom: 10,
      equipment: 'hella equipment',
      features_and_traits: 'featuring Keanu Reeves',
      other_proficiencies_and_languages:
        'I told you Balrog has lots and lots of powers English',
      age: 32,
      height: 6,
      weight: 180,
      eyes: 'Blue',
      skin: 'Pale',
      hair: 'Short and Brown',
      acrobatics: 10,
      animal_handling: 10,
      arcana: 10,
      athletics: 10,
      deception: 10,
      history: 10,
      insight: 10,
      intimidation: 10,
      investigation: 10,
      medicine: 10,
      nature: 10,
      perception: 10,
      performance: 10,
      persuasion: 10,
      religion: 10,
      sleight_of_hand: 10,
      stealth: 10,
      survival: 10
    });
    res.send(200);
  });

  app.get('/c2', (req, res) => {
    db.character.create({
      name: 'Randino',
      class: 'Warrior',
      level: 10,
      background: 'No Background',
      player_name: 'also Randy',
      faction: 'warlords of carthus',
      race: 'lizard folk',
      alignment: 'chaotic good',
      exp: 2000,
      inspiration: 1,
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
      strength_st: 10,
      dexterity_st: 10,
      constitution_st: 10,
      intelligence_st: 10,
      wisdom_st: 10,
      charisma_st: 10,
      armor_class: 5,
      initiative: 10,
      speed: 10,
      current_hp: 200,
      temp_hp: 200,
      personality_traits: 'Just a regular ol dude',
      ideals: 'ideally would like to be a coder',
      bonds: 'no bonds',
      flaws: 'interrupts people',
      attacks_and_spellcasting: 'Balrog has lots and lots of powers',
      passive_wisdom: 10,
      equipment: 'hella equipment',
      features_and_traits: 'featuring Keanu Reeves',
      other_proficiencies_and_languages:
        'I told you Balrog has lots and lots of powers English',
      age: 32,
      height: 6,
      weight: 180,
      eyes: 'Blue',
      skin: 'Pale',
      hair: 'Short and Brown',
      acrobatics: 10,
      animal_handling: 10,
      arcana: 10,
      athletics: 10,
      deception: 10,
      history: 10,
      insight: 10,
      intimidation: 10,
      investigation: 10,
      medicine: 10,
      nature: 10,
      perception: 10,
      performance: 10,
      persuasion: 10,
      religion: 10,
      sleight_of_hand: 10,
      stealth: 10,
      survival: 10
    });
    res.send(200);
  });

  //Add a character
  // app.get('/add', (req, res) => {

  // })

  // Character.create({

  // }).then(character => res.redirect('/characters'))
  // .catch(err => console.log(err));
};