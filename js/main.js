import User, {printAge, printName} from "./userclass.js"

import Character from "./character.js";

// userclass.js 

const user_one = new User("John Doe", 30, "Age is 30 u die homie");
console.log(user_one); 

printName(user_one);
printAge(user_one)

// character.js
const character_one = new Character("Recon Warrior", 29, "Too Old", 450, 125, 95, "HC83"); 
console.log(character_one); 

function beforeGameStats(character_one){
    let p1 = character_one; 
    console.log(p1); 
    console.log("Load All Necessary Game stats"); 
}
beforeGameStats(p1);
