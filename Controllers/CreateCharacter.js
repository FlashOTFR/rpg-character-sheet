class CreateCharacter {
    constructor (name, type, background){
        if (!name){
            throw new Error("Please enter a name for your character.")

        }
        if (!type){
            throw new Error("Please enter a character class-type.")
        }
        if (!background){
            throw new Error("please enter a character background story.")
        
        }
        this.name = Name;
        this.type = Class-Type;
        this.background = Background;
        
    }



}
module.exports = CreateCharacter;


