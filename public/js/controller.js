'use strict';


$( document ).ready(function() {
  $('#delBtn').on("click", deleteCharacter);
});



//DELETE function

function deleteCharacter(event) {
  console.log('this is working');
    event.stopPropagation();
    const id = $(this).data(`id`);
    console.log('this is your id: ' + id);
    $.ajax({
      method: `DELETE`,
      url: `/api/characters/${id}`
    });
  };

//POST function

function createCharacter {

};

//PUT function

function updateCharacter {

};

//GET ONE function

function getCharacter {

};