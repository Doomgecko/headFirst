var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, Aim, Fire! (Enter a Number from 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Invalid cell number! Please keep your input between 1 and 6!")
    }else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3){
            hits = hits +1;
            alert("Your missile hit my battleship!")
        } else {
            alert("Your missile fell into the watter harmlessly.")
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