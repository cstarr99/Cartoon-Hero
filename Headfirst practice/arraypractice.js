const scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
const costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .22, .20, .25, .30, .25, .24, .25, .25, .25, .27, .25, .26, .29];


//given array prints output and returns high score.
function printAndGetHighScore(arr) {
let HighestScore = 0;
let scoreOutput;
for(let i = 0; i < scores.length; i++) {
    scoreOutput = " Bubble Solution # " + i + " score: " + scores[i];
    console.log(scoreOutput);
     if(scores[i] > HighestScore) {
        HighestScore = scores[i];
    } 
}
return HighestScore;
}

//given higest score and array returns index of highest numbers in array.
function getSolutions (arr, HighScore) {
let highScoreSolution = [];
for(let i = 0; i < scores.length; i++) {
    if(scores[i] == HighestScore) {
        highScoreSolution.push(i);
    }
}
return highScoreSolution;
}

//finds lowest cost at highest score and returns that index.
function bestCosts(scores, costs) {
    let HighestScore = 0;
    let lowestCost = 100; 
    let index; 
    for(let i = 0; i < scores.length; i++) {
         if(scores[i] > HighestScore) {
            HighestScore = scores[i];
        } 
    }
    for(let j = 0; j < scores.length; j++) {
        if(scores[j] == HighestScore) {
            for(let k = 0; k < costs.length; k++) {
               if(costs[j] < lowestCost) {
                lowestCost = costs[j];
                index = j;
               }
            }
        }
    }
    return index;
}

    


let HighestScore = printAndGetHighScore(scores);
let numOfTests =  scores.length;
console.log("Bubble tests: " + numOfTests);
console.log("Highest Score: " + HighestScore);


highScoreSolution = getSolutions(scores, HighestScore);
console.log("Solutions with highest score: " + highScoreSolution);

lowestCostSolution = bestCosts(scores, costs);
console.log("The best price is at solution: " + lowestCostSolution);

