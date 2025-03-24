//PART 1------------------------------------------|
console.log("Part 1 commented out in file")
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
console.log("PART 4")
class Character{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.inventory = []
    }
    roll(mod = 0){
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        return result;
    }
    static MAX_HEALTH = 100
}

class Adventurer extends Character{
    static ROLES = ["Fighter","Healer","Wizard"];
    constructor(name,role){
        super(name);
        this.role = role; 
        this.damage = 1
        this.inventory.push("bedroll", "50 gold coins");
        //Here , check if the user's inputted role matches any of the other roles
        //If not throws an error
        if(!Adventurer.ROLES.find(element => element === this.role)){
            throw "role must be \"Fighter\", \"Healer\" or \"Wizard\""
        }else{
           this.role = role; 
        }
    }
    //implemented an ability system that will happen by chance
    ability(){
        //chance for ability to happen
        let chance = Math.floor(Math.random() * 10)
        if (this.role == "Fighter"){
            if(chance > 7){
                //sets fighters damage to 10 if ability happens
                console.log("Fighter used his ability!!")
                this.damage = 10 
                console.log(`Fighter will do ${this.damage} damage`)
            }else{
                //else the role failed
                console.log("The fighter attempted to use his ability but failed!")             
            }
        }else if(this.role == "Healer"){
            if(chance > 7){
                //healer heals 10 hp
                console.log("Healer has used his ability!!")
                console.log("Healer has gained 10 hp!!")
                console.log("\n")
                this.health += 10;  
                if(this.health > Character.MAX_HEALTH){
                    this.health = 100;
                }              
            }else{
                //else will fail
                console.log("The healer attempted to use his ability but failed!")
            }
        }else if(this.role == "Wizard"){
            if(chance > 7){
                //wiard will heal 5 and deal 5dmg
                console.log("Wizard has used his ability!!")
                console.log("The wizard will heal 5hp and deal 5 dmg!!")
                console.log("\n")
                this.damage += 5
                this.health += 5
            }else{
                //else will fail
                console.log("The wizard attempted to use his ability but failed!")
            }
        }
    }

    scout () {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }    

    duel(Adventurer){
        console.log(this.role + ' vs ' + Adventurer.role)
        while(this.health>= 50 || Adventurer.health >= 50){
            let current = this.roll()
            let opposing = Adventurer.roll();
            //Reset damage (whether or not any of the roles used an ability to deal more damage)
            this.damage = 1
            Adventurer.damage = 1
            //breaks out of the while loop if any of their healths fall below 50
            if(this.health <= 50){
                break
            }else if(Adventurer.health <= 50){
                break
            }
            if(current > opposing){
                this.ability()
                Adventurer.health -= this.damage
            }else if(opposing > current){
                Adventurer.ability()
                this.health -= Adventurer.damage
            }

            //Logs the hp of  both opponents to keep track of whats happeneing in the duel
            console.log(`The ${Adventurer.role}'s hp is currently ${Adventurer.health}`)
            console.log(`The ${this.role}'s hp is currently ${this.health}`)
            console.log("\n")
        }

        //logs the final results of their duel
        console.log(`The ${this.role} has ${this.health} hp`)
        console.log(`The ${Adventurer.role} has ${Adventurer.health} hp`)

        //logs whoever the curernt winner is
        if(this.health > Adventurer.health){
            console.log(`The ${this.role} wins`)

        }else if(this.health < Adventurer.health){
            console.log(`The ${Adventurer.role} wins`)
        }
    }
}

//const robin = new Adventurer("Robin","Fighter");
//robin.scout()


//PART 5
class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
      ///added a return so robin's data could be returned

      return newAdventurer
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
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