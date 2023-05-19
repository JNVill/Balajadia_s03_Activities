// Create a trainer object using object literals.
let trainer = {
  Name: "Dokja",
  Age: 25,
  Pokemon: [],
  Friends: ["Ash", "Brock", "Cyndy", "May"],
  talk: function() {
  	let charizard = ("Charizard");
    console.log(`\nTrainer ${this.Name}: ${charizard}, I choose you!`);
  }
};

// Access the trainer object properties using dot and square bracket notation.
console.log(`Trainer: ${trainer.Name}`);               // Output: "Trainer: Dokja"
console.log(`Age: ${trainer["Age"]}`);             // Output: "Age: 25"
console.log(`Friends: ${trainer.Friends}`);            // Output: "Friends: ["Ash", "Brock", "Cyndy", "May"]""

// Invoke the talk method of the trainer object.
trainer.talk(); // Output: "Trainer Dokja: Charizard, I choose you!"

// Create a constructor for creating a Pokemon with the given properties.
function Pokemon(name, level, health, attack) {
  this.Name = name;
  this.Level = level;
  this.Health = level * 0.5 + health;  // Equation for calculating health based on level
  this.Attack = level * 0.3 + attack;   // Equation for calculating attack based on level
}

// Instantiate several Pokemon objects with varying properties.
let torterra = new Pokemon('Torterra', 41, 95, 109);
let charizard = new Pokemon("Charizard", 32, 85, 120);

// Create the tackle method for the Pokemon object.
Pokemon.prototype.tackle = function(target) {
  console.log(this.Name + " tackled " + target.Name);
  let targetHP = Math.trunc(target.Health -= this.Attack);
  console.log(target.Name + " health is now reduced to " + targetHP);
  
  // Check if the target Pokemon has fainted.
  if (target.Health <= 0) {
    this.faint(target.Name);
  } else {
    console.log(`It's now ${target.Name}'s turn.`);
  }
};

// Create the faint method for the Pokemon object.
Pokemon.prototype.faint = function(name) {
  console.log(name + " has fainted.");
};

// Invoke the tackle method of one Pokemon object.
charizard.tackle(torterra);
