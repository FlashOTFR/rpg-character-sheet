'use strict';

const Character = require("../Controllers/CreateCharacter");

describe("CreateCharacter", () => {
    describe('Initialization', () => {
        it('should create a characer with a name which is a string', () => {
            const character = new Character("Magus", "fighter-mage", "12","bastard prince", "black magic", "Vaughn", "loner", "halfing", "chaotic-neutral", "9,000", "balance", "lots", "real fast", "sickly", "meh", "also meh", "slightly charming", "light", "keep the peace", "fast snail", "5");

            expect(character.name).toEqual("Magus");
        });

    });
    it("should create character class-type.", () => {
        const character = new Character("Magus", "fighter-mage", "12","bastard prince", "black magic", "Vaughn", "loner", "halfing", "chaotic-neutral", "9,000", "balance", "lots", "real fast", "sickly", "meh", "also meh", "slightly charming", "light", "keep the peace", "fast snail", "5");

        expect(character.type).toEqual("fighter-mage");
    });

    it("should create character level.", () => {
        const character = new Character("Magus", "fighter-mage", "12","bastard prince", "black magic", "Vaughn", "loner", "halfing", "chaotic-neutral", "9,000", "balance", "lots", "real fast", "sickly", "meh", "also meh", "slightly charming", "light", "keep the peace", "fast snail", "5");

        expect(character.level).toEqual ("12");
    });
    
    
    
 
    });


