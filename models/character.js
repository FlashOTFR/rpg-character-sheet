//Dependencies
const Sequelize = require('sequelize');
const connection = require('../config/connection');


"use strict";

module.exports = function(sequelize, DataTypes) {
  const Character = sequelize.define(`character`, {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    class: {
      type: DataTypes.STRING,
      allowNull: true
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    background: {
      type: DataTypes.STRING,
      allowNull: true
    },
    player_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    faction: {
      type: DataTypes.STRING,
      allowNull: true
    },
    race: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alignment: {
      type: DataTypes.STRING,
      allowNull: true
    },
    exp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    inspiration: {
      type: DataTypes.STRING,
      allowNull: true
    },
    strength: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dexterity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    constitution: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    intelligence: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    wisdom: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    charisma: {
      type: DataTypes.STRING,
      allowNull: true
    },
    strength_st: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dexterity_st: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    constitution_st: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    intelligence_st: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    wisdom_st: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    charisma_st: {
      type: DataTypes.STRING,
      allowNull: true
    },
    armor_class: {
      type: DataTypes.STRING,
      allowNull: true
    },
    initiative: {
      type: DataTypes.STRING,
      allowNull: true
    },
    speed: {
      type: DataTypes.STRING,
      allowNull: true
    },
    current_hp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    temp_hp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    personality_traits: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ideals: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bonds: {
      type: DataTypes.STRING,
      allowNull: true
    },
    flaws: {
      type: DataTypes.STRING,
      allowNull: true
    },
    attacks_and_spellcasting: {
      type: DataTypes.STRING,
      allowNull: true
    },
    passive_wisdom: {
      type: DataTypes.STRING,
      allowNull: true
    },
    equipment: {
      type: DataTypes.STRING,
      allowNull: true
    },
    features_and_traits: {
      type: DataTypes.STRING,
      allowNull: true
    },
    other_proficiencies_and_languages: {
      type: DataTypes.STRING,
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eyes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    skin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hair: {
      type: DataTypes.STRING,
      allowNull: true
    },
    acrobatics: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    animal_handling: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    arcana: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    athletics: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deception: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    history: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    insight: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    INTEGERimidation: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    investigation: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    medicine: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nature: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    perception: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    performance: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    persuasion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    religion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    slight_of_hand: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stealth: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    survival: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });
  return Character;
};