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
            }else{
                if(current > opposing){
                    this.ability()
                    Adventurer.health -= this.damage
                    console.log(`The ${Adventurer.role}'s hp is currently ${Adventurer.health}`)
                    console.log(`The ${this.role}'s hp is currently ${this.health}`)
                }else if(opposing > current){
                    Adventurer.ability()
                    this.health -= Adventurer.damage
                    console.log(`The ${Adventurer.role}'s hp is currently ${Adventurer.health}`)
                    console.log(`The ${this.role}'s hp is currently ${this.health}`)
                }
            }

            //Logs the hp of  both opponents to keep track of whats happeneing in the duel
           
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


  //implicitly I didn't need to import all of the classsses because the AdventureFactory Class
  //already extends the other classes so its safe to access all of the properties and methods
  //inside the parent classes
  export {AdventurerFactory}