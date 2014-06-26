//This program will be a game that has users guess a number and determines who's closest to a random value.
/**
 * Created by stevencarter on 6/21/14.
 */

var randomnumber=Math.floor(Math.random()*101);

var userinput = function(number){
    var result = randomnumber - number;
    return result;
};

alert("This is a game where players try to guess what number the computer is thinking on a scale of 0 to 100.");
var players = prompt("How many players are playing?");

while (players < 0) {
    players = prompt("ERROR\n\nYou have input an invalid value. Please try again.");
};

console.log(players);