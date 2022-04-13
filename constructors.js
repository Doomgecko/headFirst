function dog (name, breed, weight){
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

let fido = new dog("Fido", "Mixed", 38);
let fluffy = new dog("Fluffy", "Poodle", 30);
let spot = new dog("Spot", "Chihuahua", 10);
let dogs = [fido, fluffy, spot];

for (let i = 0; i < dogs.length; i++){
    let size = "small"
    if (dogs[i].weight > 10){
        let size = "large"
    }
    console.log("Dog: " + dogs[i].name + " is a " + size + " " + dogs[i].breed);
}