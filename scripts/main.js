/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

// hand is an array
function handValue (hand) {

  var total = 0;
  var aces = 0;

  for(var i = 0; i < hand.length; i++) {
    switch(hand[i]) {
      case "J":
      case "Q":
      case "K":
        total += 10;
        break;
      case "A":
        aces += 1;
        break;
      default:
        total += Number(hand[i]);
        break;
    }
  }

  for(var i = 0; i < aces; i++) {
    if(total + 11 > 21) {
      total += 1;
    } else {
      total += 11
    }
  }

  return total;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
