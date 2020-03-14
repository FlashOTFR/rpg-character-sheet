"use strict";


const db = require("../models");

module.exports = app => {
  //DELETE Character
  app.delete(`/api/characters/:id`, (req, res) => {
    let id = req.params.id;
    console.log(id);
    db.character.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbCharacter => {
      console.log('success to this point');
    });
  });

  //CREATE new character
  app.post("/api/characters", (req, res) => {
    db.character.create({
      name: req.body.name,
      class: req.body.class,
      level: req.body.level,
      background: req.body.background,
      player_name: req.body.faction,
      faction: req.body.faction,
      race: req.body.race,
      alignment: req.body.alignment,
      exp: req.body.exp,
      inspiration: req.body.inspiration,
      strength: req.body.strength,
      dexterity: req.body.dexterity,
      constitution: req.body.constitution,
      intelligence: req.body.intelligence,
      wisdom: req.body.wisdom,
      charisma: req.body.charisma,
      strength_st: req.body.strength_st,
      dexterity_st: req.body.dexterity_st,
      constitution_st: req.body.constitution_st,
      intelligence_st: req.body.intelligence_st,
      wisdom_st: req.body.wisdom_st,
      charisma_st: req.body.charisma_st,
      armor_class: req.body.armor_class,
      initiative: req.body.initiative,
      speed: req.body.speed,
      current_hp: req.body.current_hp,
      temp_hp: req.body.temp_hp,
      personality_traits: req.body.personality_traits,
      ideals: req.body.ideals,
      bonds: req.body.bonds,
      flaws: req.body.flaws,
      attacks_and_spellcasting: req.body.attacks_and_spellcasting,
      passive_wisdom: req.body.passive_wisdom,
      equipment: req.body.equipment,
      features_and_traits: req.body.features_and_traits,
      other_proficiencies_and_languages: req.body.other_proficiencies_and_languages,
      age: req.body.age,
      height: req.body.height,
      weight: req.body.weight,
      eyes: req.body.eyes,
      skin: req.body.skin,
      hair: req.body.hair,
      acrobatics: req.body.acrobatics,
      animal_handling: req.body.animal_handling,
      arcana: req.body.arcana,
      athletics: req.body.athletics,
      deception: req.body.deception,
      history: req.body.history,
      insight: req.body.insight,
      intimidation: req.body.intimidation,
      investigation: req.body.investigation,
      medicine: req.body.medicine,
      nature: req.body.nature,
      perception: req.body.perception,
      performance: req.body.performance,
      persuasion: req.body.persuasion,
      religion: req.body.religion,
      sleight_of_hand: req.body.sleight_of_hand,
      stealth: req.body.stealth,
      survival: req.body.survival
    });
    res.send(200);
  });

  //FINDONE character

  app.get('/characters/:id', (req, res) => {
    console.log('query received');
    const id = req.params.id;
    db.character.findOne({
      where: {
      id: id
      }
    }).then(characters => {
      console.log(characters);
      res.render('singlechar', {characters});})
    .catch(err => console.log(err));
  });

  
  //UPDATE Character
  app.put(`/api/characters`, (req, res) => {
    let character = req.body;
    console.log(`char name: ${character.name}`)
    console.log(`char id: ${character.id}`)
    console.log('request received ' + req.body.name);
      db.character.update(
      {
        name: character.name,
        class: character.class,
        level: character.level,
        background: character.background,
        player_name: character.faction,
        faction: character.faction,
        race: character.race,
        alignment: character.alignment,
        exp: character.exp,
        inspiration: character.inspiration,
        strength: character.strength,
        dexterity: character.dexterity,
        constitution: character.constitution,
        intelligence: character.intelligence,
        wisdom: character.wisdom,
        charisma: character.charisma,
        strength_st: character.strength_st,
        dexterity_st: character.dexterity_st,
        constitution_st: character.constitution_st,
        intelligence_st: character.intelligence_st,
        wisdom_st: character.wisdom_st,
        charisma_st: character.charisma_st,
        armor_class: character.armor_class,
        initiative: character.initiative,
        speed: character.speed,
        current_hp: character.current_hp,
        temp_hp: character.temp_hp,
        personality_traits: character.personality_traits,
        ideals: character.ideals,
        bonds: character.bonds,
        flaws: character.flaws,
        attacks_and_spellcasting: character.attacks_and_spellcasting,
        passive_wisdom: character.passive_wisdom,
        equipment: character.equipment,
        features_and_traits: character.features_and_traits,
        other_proficiencies_and_languages: character.other_proficiencies_and_languages,
        age: character.age,
        height: character.height,
        weight: character.weight,
        eyes: character.eyes,
        skin: character.skin,
        hair: character.hair,
        acrobatics: character.acrobatics,
        animal_handling: character.animal_handling,
        arcana: character.arcana,
        athletics: character.athletics,
        deception: character.deception,
        history: character.history,
        insight: character.insight,
        intimidation: character.intimidation,
        investigation: character.investigation,
        medicine: character.medicine,
        nature: character.nature,
        perception: character.perception,
        performance: character.performance,
        persuasion: character.persuasion,
        religion: character.religion,
        sleight_of_hand: character.sleight_of_hand,
        stealth: character.stealth,
        survival: character.survival
      },
      {
        where: {
          id: character.id
        }
      }
    ).then(data => {
      console.log('\n\n\n\n\n\n\n\nrequest complete');
      res.json(data)
    })
      .catch(err => {
        console.log('error!!\n\n\n', err);
        res.send(err);
      });
  });
 
  //NOTHING TO SEE PAST HERE==========================================================================================
  //SEED CHARACTERS
  app.get('/c', (req, res) => {
    db.character.create({
      name: 'Brandino',
      class: 'Wizard',
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

};