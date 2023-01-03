let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;

let currentGuess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while(isSunk == false) {
 currentGuess = prompt("ready, aim, fire!(enter a number from 0-6):");
 if(currentGuess > 6 || currentGuess < 0)
 {
    alert("enter a valid number");
 }
 else {
    guesses = guesses + 1;
    if(currentGuess == location1 || currentGuess == location2 || currentGuess == location3)
 {
   alert("HIT");
  hits = hits + 1; 
  if(hits == 3)
 {
    isSunk = true;
    alert("you sank my battleship");
 } 
}
else {
   alert("MISS");
}
}
}
 let stats = "you took " + guesses + " guesses to sink the battleship. " + " your shooting accuracy was " + (3/guesses);
 alert(stats);
 


