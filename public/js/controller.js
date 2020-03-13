'use strict';


$( document ).ready(function() {
  $('.delBtn').on("click", deleteCharacter);



  
$('#create-button').on('click', function() {
  console.log(`Create button has been clicked`)

  const newCharacter = {
    name: $('#character-name').val(),
    level: $('#character-level').val(),
  }

  const {name, level} = newCharacter;
  console.log(`I am a new character and my name is ${name} and my level is ${level}`)
  createCharacter(newCharacter);
 
});

const createCharacter = character => {
  $.ajax({
    method: 'POST',
    url: `/api/newchar/${character}`
  }).then(console.log(`I created a character`));
}
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
  
  // const variables = { name: testName}
  
});