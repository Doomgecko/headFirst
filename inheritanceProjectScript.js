function Robot(name, year, owner){
    this.name = name;
    this.year = year;
    this.owner = owner;
}

Robot.prototype.maker = "ObjectsRUs";
Robot.prototype.speak = function(){
    alert("Warning, Warning!");
}
Robot.prototype.makeCoffee = function(){
    alert("Making Coffee");
}
Robot.prototype.blinkLights = function(){
    alert("Blink, blink");
}

let robby = new Robot ("Robby", 1956, "Dr.Morbius");
let rosy = new Robot ("Rosie", 1962, "George Jetson");