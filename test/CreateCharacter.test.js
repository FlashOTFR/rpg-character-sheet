'use strict';

const Character = require("../Controllers/CreateCharacter");

describe("CreateCharacter", () => {
    describe('Initialization', () => {
        it('should create a characer with a name which is a string', () => {
            const character = new Character("Magus", "fighter-mage", "bastard prince", "black magic", "Vaughn", "loner", "halfing", "chaotic-neutral", "9,000", "balance", "lots", "real fast", "sickly", "meh", "also meh", "slightly charming", "light", "keep the peace", "fast snail",);

            expect(character.name).toEqual("Magus");
        });

    });
    it("should create character class-type.", () => {
        const character = new Character("Magus", "fighter-mage", "bastard prince", "black magic", "Vaughn", "loner", "halfing", "chaotic-neutral", "9,000", "balance", "lots", "real fast", "sickly", "meh", "also meh", "slightly charming", "light", "keep the peace", "fast snail",);

        expect(character.type).toEqual("fighter-mage");
    });

    it("should create character background.", () => {
        const character = new Character("Magus", "fighter-mage", "bastard prince", "black magic", "Vaughn", "loner", "halfing", "chaotic-neutral", "9,000", "balance", "lots", "real fast", "sickly", "meh", "also meh", "slightly charming", "light", "keep the peace", "fast snail",);

        expect(character.background).toEqual("bastard prince");
    });

    // it("should create character faction.", () => {
    //     const character = new Character("Magus", "fighter-mage", "bastard prince", "black magic", "Vaughn", "loner", "halfing", "chaotic-neutral", "9,000", "balance", "lots", "real fast", "sickly", "meh", "also meh", "slightly charming", "light", "keep the peace", "fast snail",);

    //     expect(character.faction).toEqual("black magic");
    // });
    
   
    
    
 
    })

    


