class CreateCharacter {
    constructor (name, role, background){
        if (!name){
            throw new Error("Please enter a name for your character.")

        }
        if (!role){
            throw new Error("Please enter a character role.")
        }
        if (!background){
            throw new Error("please enter a character background story.")
        
        }
        this.name = name;
        this.type = role;
        this.background = background;
        
    }



}
module.exports = CreateCharacter;


