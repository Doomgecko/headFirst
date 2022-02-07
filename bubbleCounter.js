var scores = [60, 50, 60];

i = 0;

highScore = 0;

while (i < scores.length){

    console.log("Bubble Solution #" + (i+1) + " score: " + scores[i]);

    if (scores[i] > highScore){

        highScore = scores[i];

    }
    i++
}

console.log("Bubbles Tests: " + (scores.length));

console.log("Highest Bubble Score: " + highScore);

var bestSolutions = [];

for (var i = 0; i < scores.length; i++) {

    if (scores[i] == highScore){

        bestSolutions.push(i);
    }

}

console.log("Best Solutions: " + bestSolutions);