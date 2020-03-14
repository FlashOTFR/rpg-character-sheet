'use strict';


$( document ).ready(function() {
  $('.delBtn').on("click", deleteCharacter);
  $('.shoBtn').on('click', singleChar);
  $('#update-button').on('click', updateChar);
  $('#create-button').on('click', createCharacter);

  //DELETE function
  
  function deleteCharacter(event) {
    console.log('this is working');
    event.stopPropagation();
    const id = $(this).data(`id`);
    console.log('this is your id: ' + id);
    $.ajax({
      method: `DELETE`,
      url: `/api/characters/${id}`
    }).then(location.reload());
  };
  
  //Renders a single character sheet
  
  function singleChar(event) {
    console.log('button pressed');
    const id = $(this).data(`id`);
    console.log('this is your id ' + id);
    $.ajax({
      method: 'GET',
      url: `/characters/${id}`
    }).then(console.log('query sent'));
  };
  
  
  //CREATE function
  
    function createCharacter(event) {
      event.preventDefault();
      console.log('create button pressed');
      const character = {
        name: $('#character-name').val(),
        class: $('#character-class').val(),
        level: $('#character-level').val(),
        background: $('#character-background').val(),
        player_name: $('#character-player_name').val(),
        faction: $('#character-faction').val(),
        race: $('#character-race').val(),
        alignment: $('#character-alignment').val(),
        exp: $('#character-exp').val(),
        inspiration: $('#character-inspiration').val(),
        strength: $('#character-strength').val(),
        dexterity: $('#character-dexterity').val(),
        constitution: $('#character-constitution').val(),
        intelligence: $('#character-intelligence').val(),
        wisdom: $('#character-wisdom').val(),
        charisma: $('#character-charisma').val(),
        strength_st:$('#character-strength_st').val(),
        dexterity_st: $('#character-dexterity_st').val(),
        constitution_st: $('#character-constitution_st').val(),
        intelligence_st: $('#character-intelligence_st').val(),
        wisdom_st: $('#character-wisdom_st').val(),
        charisma_st: $('#character-charisma_st').val(),
        armor_class: $('#character-armor_class').val(),
        initiative: $('#character-initiative').val(),
        speed: $('#character-speed').val(),
        current_hp: $('#character-current_hp').val(),
        temp_hp: $('#character-temp_hp').val(),
        personality_traits: $('#character-personality_traits').val(),
        ideals: $('#character-ideals').val(),
        bonds: $('#character-bonds').val(),
        flaws: $('#character-flaws').val(),
        attacks_and_spellcasting: $('#character-attacks_and_spellcasting').val(),
        passive_wisdom: $('#character-passive_wisdom').val(),
        equipment: $('#character-equipment').val(),
        features_and_traits: $('#character-features_and_traits').val(),
        other_proficiencies_and_languages: $('#character-other_proficiences_and_languages').val(),
        age: $('#character-age').val(),
        height: $('#character-height').val(),
        weight: $('#character-weight').val(),
        eyes: $('#character-eyes').val(),
        skin: $('#character-skin').val(),
        hair: $('#character-hair').val(),
        acrobatics: $('#character-acrobatics').val(),
        animal_handling: $('#character-animal_handling').val(),
        arcana: $('#character-arcana').val(),
        athletics: $('#character-athletics').val(),
        deception: $('#character-deception').val(),
        history: $('#character-history').val(),
        insight: $('#character-insight').val(),
        intimidation: $('#character-intimidation').val(),
        investigation: $('#character-investigation').val(),
        medicine: $('#character-medicine').val(),
        nature: $('#character-nature').val(),
        perception: $('#character-perception').val(),
        performance: $('#character-performance').val(),
        persuasion: $('#character-persuasion').val(),
        religion: $('#character-religion').val(),
        sleight_of_hand: $('#character-sleight_of_hand').val(),
        stealth: $('#character-stealth').val(),
        survival: $('#character-survival').val(),
          
      };
      console.log(character);
      $.post(`/api/characters`, character);
      console.log('character created');
      location.reload();
    }
});

function updateChar(event){
  event.preventDefault();
  console.log('update button pressed');
  const id = $(this).data(`id`);
  console.log('this is your id ' + id);
  const character = {
    name: $('#character-name').val(),
    class: $('#character-class').val(),
    level: $('#character-level').val(),
    background: $('#character-background').val(),
    player_name: $('#character-player_name').val(),
    faction: $('#character-faction').val(),
    race: $('#character-race').val(),
    alignment: $('#character-alignment').val(),
    exp: $('#character-exp').val(),
    inspiration: $('#character-inspiration').val(),
    strength: $('#character-strength').val(),
    dexterity: $('#character-dexterity').val(),
    constitution: $('#character-constitution').val(),
    intelligence: $('#character-intelligence').val(),
    wisdom: $('#character-wisdom').val(),
    charisma: $('#character-charisma').val(),
    strength_st:$('#character-strength_st').val(),
    dexterity_st: $('#character-dexterity_st').val(),
    constitution_st: $('#character-constitution_st').val(),
    intelligence_st: $('#character-intelligence_st').val(),
    wisdom_st: $('#character-wisdom_st').val(),
    charisma_st: $('#character-charisma_st').val(),
    armor_class: $('#character-armor_class').val(),
    initiative: $('#character-initiative').val(),
    speed: $('#character-speed').val(),
    current_hp: $('#character-current_hp').val(),
    temp_hp: $('#character-temp_hp').val(),
    personality_traits: $('#character-personality_traits').val(),
    ideals: $('#character-ideals').val(),
    bonds: $('#character-bonds').val(),
    flaws: $('#character-flaws').val(),
    attacks_and_spellcasting: $('#character-attacks_and_spellcasting').val(),
    passive_wisdom: $('#character-passive_wisdom').val(),
    equipment: $('#character-equipment').val(),
    features_and_traits: $('#character-features_and_traits').val(),
    other_proficiencies_and_languages: $('#character-other_proficiences_and_languages').val(),
    age: $('#character-age').val(),
    height: $('#character-height').val(),
    weight: $('#character-weight').val(),
    eyes: $('#character-eyes').val(),
    skin: $('#character-skin').val(),
    hair: $('#character-hair').val(),
    acrobatics: $('#character-acrobatics').val(),
    animal_handling: $('#character-animal_handling').val(),
    arcana: $('#character-arcana').val(),
    athletics: $('#character-athletics').val(),
    deception: $('#character-deception').val(),
    history: $('#character-history').val(),
    insight: $('#character-insight').val(),
    intimidation: $('#character-intimidation').val(),
    investigation: $('#character-investigation').val(),
    medicine: $('#character-medicine').val(),
    nature: $('#character-nature').val(),
    perception: $('#character-perception').val(),
    performance: $('#character-performance').val(),
    persuasion: $('#character-persuasion').val(),
    religion: $('#character-religion').val(),
    sleight_of_hand: $('#character-sleight_of_hand').val(),
    stealth: $('#character-stealth').val(),
    survival: $('#character-survival').val(),
      
  };
  console.log(character);
  $.ajax({ url: '/api/singlechar', type: 'PUT', data: character, success: function(data) {
    console.log('request sent');
    // location.reload();
  }});
};
