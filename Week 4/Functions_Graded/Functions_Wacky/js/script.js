//This program will be a game that has users guess a number and determines who's closest to a random value.
/**
 * Created by stevencarter on 6/21/14.
 */

var randomnumber=Math.floor(Math.random()*101);
var guessbank = [];
var diffbank = [];
var userinput = function(number){
    result = Math.abs(randomnumber - number);
    return result;
};


alert("This is a game where players try to guess what number the computer is thinking on a scale of 0 to 100.");
var players = prompt("How many players are playing?");

while (players < 0) {
    players = prompt("ERROR\n\nYou have input an invalid value. Please try again.");
}
var playernumber = 1;

while (players > 0) {
    var guess = prompt("What is player " + playernumber + "'s guess?");
    guessbank.push(guess);
    diffbank.push(userinput(guess));
    playernumber++;
    players--;
}

Array.min = function( array ){
    return Math.min.apply( Math, array );
};

var minimum = Array.min(diffbank);

var pos = diffbank.indexOf(minimum);

var winPos = pos + 1;

console.log("Player " + winPos + " is the winner! They guessed " + guessbank[pos] + " which was only " + minimum + " away from the computer's number of " + randomnumber + ".");