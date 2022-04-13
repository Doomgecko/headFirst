function Car (make, model, year, color, passengers, convertible, mileage, started){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.convertible = convertible;
    this.mileage = mileage;
    this.started = started;
    this.start = function(){
        this.started = true;
    }
    this.stop = function(){
        this.started = false;
    }
    this.drive = function(){
        if(this.started) {
            console.log(this.make + " " + this.model + " goes zoom zoom!");
        }else {
            console.log("Start the engine first!");
        }
    }
}

let chevy = new Car ("Chevy", "Bel Air", 1957, "Red", 2,
    false, 1021, false);
let fiat = new Car ("Fiat", "500", 1957, "Medium Blue", 2,
    false, 8080, false);

let cars = [chevy, fiat];
for (i = 0; i < cars.length; i++){
    cars[i].start();
    cars[i].drive();
    cars[i].stop();
}