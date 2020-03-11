'use strict';

const Character = require("../Controllers/CreateCharacter");

describe("CreateCharacter", () => {
    describe('Initialization', () => {
        it('should create a characer with a name which is a string', () => {
            const character = new Character("Magus", "fighter mage", "halfling bastard prince");

            expect(character.name).toEqual("Magus");
        });

    });
    // it("Should create name, should be a string", async () => {const character = await Character.getAll()
    //     console.log(character)
    //     expect(character.name).toEqual("Magus");
    //  })
})
