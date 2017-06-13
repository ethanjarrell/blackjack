/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/




var hand = [];

function handValue (hand) {

  var acesInWaiting = [];

  var sum;

for (var i = 0; i < hand.length-1; i++) {

  //checking for a king, queen or Jack
  if (hand[i] === "K" || hand[i] === "Q" || hand[i] === "J") {

    //if it is, changes the value to 10
    hand === 10;
  }

//checking to see if it's an ace, and if so, pushing it to
//aces in waiting

    else if (hand[i] === "A") {
    acesInWaiting.push(hand[i]);
    hand[i] = 1;}


  }

  for (var i = 0; i < hand.length; i++) {
    hand[i] = parseInt(hand[i]);
  }
  sum = (hand.reduce((a, b) => a + b, 0));



  //if the sum of the entire hand is greater than 10, the value of the ace is 1, but if it's less than 10, all the aces have a value of 1 instead

  if (sum <= 10){
    if (acesInWaiting.length = 1) {
      acesInWaiting[i] = 11
    } else if (acesInWaiting.length > 1) {
      acesInWaiting[i] = 1;
    }
    acesInWaiting.reduce((a, b) => a + b, 0);
    sum += acesInWaiting;
    }
return sum;
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
