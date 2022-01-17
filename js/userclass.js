export default class User {
    constructor(name, age, score){
        this.name = name
        this.age = age
        this.score = score
    }
}

export function printName(user){
    console.log(`Users name is ${user.name}`);
}
export function printAge(user){
    console.log(`Users name is ${user.age}`);

}
