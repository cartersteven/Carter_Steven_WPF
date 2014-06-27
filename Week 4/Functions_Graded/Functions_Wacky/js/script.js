//This program will be a game that has users guess a number and determines who's closest to a random value.
/**
 * Created by stevencarter on 6/21/14.
 */

var randomnumber=Math.floor(Math.random()*101); //This creates the random number that the computer is thinking.
var guessbank = []; //This creates the array that holds the user's guesses.
var diffbank = []; //This creates the array that holds the differences between the user guesses and the computer number.
var userinput = function(number){
    //This function takes the user's input, determines if it is outside the range of 0-100, then subtracts from the random number, finds the absolute, and returns the result.
    while (number < 0 || number > 100){
        number = prompt("ERROR\n\nThat number is invalid.\nPlease enter a number between 0 and 100.")
    }
    result = Math.abs(randomnumber - number);
    return result;
};


alert("This is a game where players try to guess what number the computer is thinking on a scale of 0 to 100."); //This alert displays the instructions and rules.
var players = prompt("How many players are playing?");//This prompt asks how many players there will be.

while (players < 0) {
    //This error checks the players prompt
    players = prompt("ERROR\n\nYou have input an invalid value. Please try again.");
}
var playernumber = 1;//this sets up the player variable to start at a value of one.

while (players > 0) {
    //this gathers the data on the player guesses and adds them to the appropriate arrays.
    var guess = prompt("What is player " + playernumber + "'s guess?");
    guessbank.push(guess);
    diffbank.push(userinput(guess));
    playernumber++;
    players--;
}

Array.min = function( array ){
    //This finds the smallest number in whatever array is inserted into the functions.
    return Math.min.apply( Math, array );
};

var minimum = Array.min(diffbank); //This finds the smallest number in the diffbank array.

var pos = diffbank.indexOf(minimum); //This finds the position of the smallest number in the diffbank array.

var winPos = pos + 1; //This makes that position into a player.

console.log("Player " + winPos + " is the winner! They guessed " + guessbank[pos] + " which was only " + minimum + " away from the computer's number of " + randomnumber + ".");//This logs the winner and why they were the winner.