//Dependencies
const Sequelize = require("sequelize");
const db = require("../config/connection");

//Model
const Character = db.define("character", {
  character_name: {
    type: datatype.STRING
  },
  class: {
    type: datatype.STRING
  },
  level: {
    type: datatype.INT
  },
  background: {
    type: datatype.STRING
  },
  player_name: {
    type: datatype.STRING
  },
  faction: {
    type: datatype.STRING
  },
  race: {
    type: datatype.STRING
  },
  alignment: {
    type: datatype.STRING
  },
  exp: {
    type: datatype.INT
  },
  inspiration: {
    type: datatype.STRING
  },
  strength: {
    type: datatype.INT
  },
  dexterity: {
    type: datatype.INT
  },
  constitution: {
    type: datatype.INT
  },
  intelligence: {
    type: datatype.INT
  },
  wisdom: {
    type: datatype.INT
  },
  charisma_st: {
    type: datatype.STRING
  },
  strength_st: {
    type: datatype.INT
  },
  dexterity_st: {
    type: datatype.INT
  },
  constitution_st: {
    type: datatype.INT
  },
  intelligence_st: {
    type: datatype.INT
  },
  wisdom_st: {
    type: datatype.INT
  },
  armor_class: {
    type: datatype.STRING
  },
  initiative: {
    type: datatype.STRING
  },
  speech: {
    type: datatype.STRING
  },
  current_hp: {
    type: datatype.STRING
  },
  temp_hp: {
    type: datatype.STRING
  },
  personality_traits: {
    type: datatype.STRING
  },

  ideals: {
    type: datatype.STRING
  },
  bonds: {
    type: datatype.STRING
  },
  flaws: {
    type: datatype.STRING
  },
  attacks_and_spellcasting: {
    type: datatype.STRING
  },
  passive_wisdom: {
    type: datatype.STRING
  },
  equipment: {
    type: datatype.STRING
  },
  features_and_traits: {
    type: datatype.STRING
  },
  other_proficiencies_and_languages: {
    type: datatype.STRING
  },
  age: {
    type: datatype.INT
  },
  height: {
    type: datatype.INT
  },
  weight: {
    type: datatype.INT
  },
  eyes: {
    type: datatype.STRING
  },
  skin: {
    type: datatype.STRING
  },
  hair: {
    type: datatype.STRING
  },

  acrobatics: {
    type: datatype.INT
  },

  animal_handling: {
    type: datatype.INT
  },

  arcana: {
    type: datatype.INT
  },

  athletics: {
    type: datatype.INT
  },

  deception: {
    type: datatype.INT
  },

  history: {
    type: datatype.INT
  },

  insight: {
    type: datatype.INT
  },

  intimidation: {
    type: datatype.INT
  },

  investigation: {
    type: datatype.INT
  },

  medicine: {
    type: datatype.INT
  },

  nature: {
    type: datatype.INT
  },

  perception: {
    type: datatype.INT
  },

  performance: {
    type: datatype.INT
  },

  persuasion: {
    type: datatype.INT
  },

  religion: {
    type: datatype.INT
  },

  slight_of_hand: {
    type: datatype.INT
  },

  stealth: {
    type: datatype.INT
  },

  survival: {
    type: datatype.INT
  }

  //fields will go here once we figure out what they are.
});

module.exports = Character;
