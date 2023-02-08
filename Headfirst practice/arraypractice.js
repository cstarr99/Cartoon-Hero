const scores = [
  60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
  64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44,
];
const costs = [
  0.25, 0.27, 0.25, 0.25, 0.25, 0.25, 0.33, 0.31, 0.25, 0.29, 0.27, 0.22, 0.31,
  0.25, 0.25, 0.33, 0.21, 0.25, 0.25, 0.25, 0.28, 0.25, 0.24, 0.22, 0.2, 0.25,
  0.3, 0.25, 0.24, 0.25, 0.25, 0.25, 0.27, 0.25, 0.26, 0.29,
];

//given array prints output and returns high score.
function printAndGetHighScore(arr) {
  let HighestScore = 0;
  let scoreOutput;
  for (let i = 0; i < scores.length; i++) {
    scoreOutput = " Bubble Solution # " + i + " score: " + scores[i];
    console.log(scoreOutput);
    if (scores[i] > HighestScore) {
      HighestScore = scores[i];
    }
  }
  return HighestScore;
}

//given higest score and array returns index of highest numbers in array.
function getSolutions(arr, HighScore) {
  let highScoreSolution = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] == HighestScore) {
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
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > HighestScore) {
      HighestScore = scores[i];
    }
  }
  for (let j = 0; j < scores.length; j++) {
    if (scores[j] == HighestScore) {
      for (let k = 0; k < costs.length; k++) {
        if (costs[j] < lowestCost) {
          lowestCost = costs[j];
          index = j;
        }
      }
    }
  }
  return index;
}

let HighestScore = printAndGetHighScore(scores);
let numOfTests = scores.length;
console.log("Bubble tests: " + numOfTests);
console.log("Highest Score: " + HighestScore);

highScoreSolution = getSolutions(scores, HighestScore);
console.log("Solutions with highest score: " + highScoreSolution);

lowestCostSolution = bestCosts(scores, costs);
console.log("The best price is at solution: " + lowestCostSolution);
