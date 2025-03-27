//PART 1------------------------------------------|
//console.log("Part 1 commented out in file")
// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"]
//     }

// console.log("Robin's Inventory");
// for(let i = 0; i < adventurer.inventory.length;i++){
//     console.log((i+1)+". " + adventurer.inventory[i]);
// }

// adventurer.companion = {name: "Leo", type: "Cat"}

// adventurer.companion.companion = {name: "Frank", type: "Flea",belongings:["Hat","Sunglasses"]}
// console.log("Robin's companion's companion")
// console.log(adventurer)

// adventurer.roll = function(mod = 0){
//     const result = Math.floor(Math.random() * 20) + 1 + mod;
//     console.log(`${this.name} rolled a ${result}.`)
// }

// console.log(adventurer)
// adventurer.roll()
// adventurer.roll()
// adventurer.roll()
//PART 2------------------------------------------|
console.log("Part 2 commented out in file")
// class Character{
//     constructor(name){
//         this.name = name;
//         this.health = 100;
//         this.inventory = []
//     }
//     roll(mod = 0){
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`)
//     }
// }

// const robin = new Character("Robin");
// console.log("___________Robin using class___________")
// robin.roll()

// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

//PART 3------------------------------------------|
console.log("Part 3 commented out in file")
// class Adventurer extends Character{
//     constructor(name,role){
//         super(name);
//         this.role = role;
//         this.inventory.push("bedroll", "50 gold coins");
//     }
//     scout () {
//         console.log(`${this.name} is scouting ahead...`);
//         super.roll();
//     }    
// }

// class Companion extends Character{
//     constructor(name,type,[...belongings]){
//         super(name);
//         this.type = type;
//         this.belongings = belongings
//     }
// }

// const robin = new Adventurer("Robin","Hero");

// robin.scout()

// const frank = new Companion("Frank","Flea",['Hat','Sunglasses'])
// console.log(frank.belongings)

//PART 4
//console.log("PART 4")



//const robin = new Adventurer("Robin","Fighter");
//robin.scout()


//PART 5

//Here I imported the character classes into my index.js file
import { AdventurerFactory} from "./classes.js"
//creating a healer
const healers = new AdventurerFactory("Healer");
const robin = healers.generate("Robin");

//creating a fighter
const fighters = new AdventurerFactory("Fighter");
const alex = fighters.generate("Alex");

//logging for debugging
console.log("_____Debugging roles below______")
console.log(robin)
console.log(alex)
console.log("\n")

//implementing dueling
console.log("______Dueling system below______")
robin.duel(alex)
console.log("\n")