module.exports = (sequelize, DataTypes) => {
  return sequelize.define('character', {
    name: {
      type: DataTypes.STRING
    },
    class: {
      type: DataTypes.STRING
    },
    level: {
      type: DataTypes.INTEGER
    },
    background: {
      type: DataTypes.STRING
    },
    player_name: {
      type: DataTypes.STRING
    },
    faction: {
      type: DataTypes.STRING
    },
    race: {
      type: DataTypes.STRING
    },
    alignment: {
      type: DataTypes.STRING
    },
    exp: {
      type: DataTypes.INTEGER
    },
    inspiration: {
      type: DataTypes.STRING
    },
    strength: {
      type: DataTypes.INTEGER
    },
    dexterity: {
      type: DataTypes.INTEGER
    },
    constitution: {
      type: DataTypes.INTEGER
    },
    intelligence: {
      type: DataTypes.INTEGER
    },
    wisdom: {
      type: DataTypes.INTEGER
    },
    charisma: {
      type: DataTypes.STRING
    },
    strength_st: {
      type: DataTypes.INTEGER
    },
    dexterity_st: {
      type: DataTypes.INTEGER
    },
    constitution_st: {
      type: DataTypes.INTEGER
    },
    intelligence_st: {
      type: DataTypes.INTEGER
    },
    wisdom_st: {
      type: DataTypes.INTEGER
    },
    charisma_st: {
      type: DataTypes.INTEGER
    },
    armor_class: {
      type: DataTypes.STRING
    },
    initiative: {
      type: DataTypes.STRING
    },
    speed: {
      type: DataTypes.STRING
    },
    current_hp: {
      type: DataTypes.STRING
    },
    temp_hp: {
      type: DataTypes.STRING
    },
    personality_traits: {
      type: DataTypes.STRING
    },
    ideals: {
      type: DataTypes.STRING
    },
    bonds: {
      type: DataTypes.STRING
    },
    flaws: {
      type: DataTypes.STRING
    },
    attacks_and_spellcasting: {
      type: DataTypes.STRING
    },
    passive_wisdom: {
      type: DataTypes.STRING
    },
    equipment: {
      type: DataTypes.STRING
    },
    features_and_traits: {
      type: DataTypes.STRING
    },
    other_proficiencies_and_languages: {
      type: DataTypes.STRING
    },
    age: {
      type: DataTypes.INTEGER
    },
    height: {
      type: DataTypes.INTEGER
    },
    weight: {
      type: DataTypes.INTEGER
    },
    eyes: {
      type: DataTypes.STRING
    },
    skin: {
      type: DataTypes.STRING
    },
    hair: {
      type: DataTypes.STRING
    },

    acrobatics: {
      type: DataTypes.INTEGER
    },

    animal_handling: {
      type: DataTypes.INTEGER
    },

    arcana: {
      type: DataTypes.INTEGER
    },

    athletics: {
      type: DataTypes.INTEGER
    },

    deception: {
      type: DataTypes.INTEGER
    },

    history: {
      type: DataTypes.INTEGER
    },

    insight: {
      type: DataTypes.INTEGER
    },

    intimidation: {
      type: DataTypes.INTEGER
    },

    investigation: {
      type: DataTypes.INTEGER
    },

    medicine: {
      type: DataTypes.INTEGER
    },

    nature: {
      type: DataTypes.INTEGER
    },

    perception: {
      type: DataTypes.INTEGER
    },

    performance: {
      type: DataTypes.INTEGER
    },

    persuasion: {
      type: DataTypes.INTEGER
    },

    religion: {
      type: DataTypes.INTEGER
    },

    sleight_of_hand: {
      type: DataTypes.INTEGER
    },

    stealth: {
      type: DataTypes.INTEGER
    },

    survival: {
      type: DataTypes.INTEGER
    }
  });
};
