function Coffee(roast, ounces){
    this.roast = roast;
    this.ounces = ounces;
    this.getSize = function(){
        if (this.ounces = 8){
            return "small";
        }else if (this.ounces = 12){
           return "medium";
        }else if (this .ounces = 16){
            return "large";
        }
    }
    this.toString = function(){
       return "You've ordered a " + this.getSize() + " " + roast + " coffee.";
    }
}

let houseBlend = new Coffee("House Blend", 8);
console.log (houseBlend.toString());
let darkRoast = new Coffee("Dark Roast", 12);
console.log (darkRoast.toString());
let pureBrew = new Coffee("Pure Brew", 16);
console.log (pureBrew.toString());