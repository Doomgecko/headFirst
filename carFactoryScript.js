function Car (make, model, year, color, passengers, convertible, mileage, started){
    let properties = [make,model,year,color,passengers,convertible, mileage, started];
    for (let i = 0; i < properties.length; i++){
        let property = properties[i];
        this.property = properties[i];
    }
    this.start = function(){
        this.started = true;
    }
    this.stop = function(){
        this.started = false;
    }
    this.drive = function(){
        if(this.started) {
            console.log(this.make + "" + this.model + " goes zoom zoom!");
        }else {
            console.log("Start the engine first!");
        }
    }
}

let chevy = new Car ("Chevy", "Bel Air", 1957, "Red", 2,
    false, 1021, false);
let Fiat = new Car ("Fiat", "500", 1957, "Medium Blue", 2,
    false, 8080, false);