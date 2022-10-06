'use strict';

/**
 * Returns a string of the count and Bet or Hold
 * @param {array} cards - an array of cards
 * @returns {string} - message 
 */
function countCards(cards) {
    let count = 0;
    let change = "None";
   for (let i = 0; i < cards.length; i++) 
   {
    if(cards[i] === 10)
    {
        count = count - 1;
    }
    if(cards[i] === 'J')
    {
        count = count - 1;
    }
    if(cards[i] === 'K')
    {
        count = count - 1;
    }
    if(cards[i] === 'Q')
    {
        count = count - 1;
    }
    if(cards[i] === 'A')
    {
        count = count - 1;
    }
    if(cards[i] > 1 && cards[i] < 7)
    {
        count = count + 1;
    }
    if(cards[i] > 6 && cards[i] < 10)
    {
        count = count;
    }
   }


   if(count <= 0)
   {
    change = "Hold";
   } else
   {
    change = "Bet";
   }

   let result = count + " " + change; 
   return result;     
}


//uncomment following test code after implementing the function
 console.log(countCards([2, 3, 7, 'K', 'A']));
 console.log(countCards([2, 3, 4, 5, 6]));
 console.log(countCards([7, 8, 9]));
 console.log(countCards([10, 'J', 'Q', 'K', 'A']));
 console.log(countCards([3, 7, 'Q', 8, 'A']));
 console.log(countCards([2, 2, 10]));
 console.log(countCards([2, 9, 'J', 2, 7]));
 console.log(countCards([3, 2, 'A', 10, 'K']));

