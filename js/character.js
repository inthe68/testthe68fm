export default class Character {
    constructor(name, age, score, health, attack, defense, alias){
        this.name = name
        this.age = age
        this.score = score
        this.health = health;
        this.attack = attack
        this.defense = defense;
        this.stats = function printStats(){
            console.log(`Character: - ${this.name} -- :: -- Stats : Health - ${this.health}: - Atk: ${this.attack}: Def - ${this.defense} `)
        }
        this.alias = alias; 
    }
}

export function printName(character){
    console.log("Character: ", character.name); 

}