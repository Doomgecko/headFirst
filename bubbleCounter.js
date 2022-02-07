var scores = [60, 50, 60];

i = 0;

highScore = 0;

while (i > scores.length-1){

    console.log("Bubble Solution #" + i + "score: " + scores[i]);

    if (scores[i] > highScore){

        highScore = scores[i];

    }

}

console.log("Bubbles Tests: " + scores.length-1);

console.log("Highest Bubble Score: " + highScore);

var bestSolutions = [];

for (var i = 0; i < scores.length; i++) {

    if (scores [i] == highScore){

        bestSolution.push(i);
    }

}

console.log("Best Solutions: " + bestSolutions);