//This program will calculate if a traveler will make it to their destination given that they are traveling at an average speed. if they are not traveling at the needed minimum, the console will print the needed minimum.
/**
 * Created by stevencarter on 6/17/14.
 */

var avg = prompt("What is your current average speed, in miles per hour?"); //This prompt asks the user how fast they are going on average.
var dist = prompt("What is the distance, in miles, that needs to be covered?"); //This prompt asks the user how far they are from their destination.
var time = prompt("What is the remaining time needed to reach the destination, in minutes?"); //This prompt asks the user how many minutes they have left.

var timeH = time / 60; //This turns the time variable into hours.
var speedNeed = dist / timeH; //This calculates the needed speed to make it to the destination on time.

if (speedNeed <= avg){
    //This will print if the speed needed is less than the speed currently made.
    console.log("You will make it to the destination on time")
} else {
    //This will print if the speed needed is greater than the current speed.
    console.log("You will not make it on time. The average speed that you need to maintain is at least " + speedNeed + "mph.")
}