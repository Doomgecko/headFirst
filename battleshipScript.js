var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var loc1Status = true;
var loc2Status = true;
var loc3Status = true;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, Aim, Fire! (Enter a Number from 0-6):");
    if ((guess == location1 && loc1Status == false)
        ||(guess == location2 && loc2Status == false)
        || (guess == location3 && loc3Status == false)){
        alert("You already hit there!");
    }else if (guess < 0 || guess > 6) {
        alert("Invalid cell number! Please keep your input between 1 and 6!");
    }else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3){
            hits = hits +1;
            if (guess == location1){
                loc1Status = false;
            } else if (guess == location2){
                loc2Status = false;
            } else if (guess == location3){
                loc3Status = false;
            }
            alert("Your missile hit my battleship!");
        } else {
            alert("Your missile fell into the watter harmlessly.");
        }
        if (hits==3){
            isSunk = true;
            alert("You sunk my battleship!");
        }
    }

}
var stats = "You took " + guesses + " guesses to sink the battleship," +
    "You have a shooting accuracy of " + (3/guesses);
alert(stats);