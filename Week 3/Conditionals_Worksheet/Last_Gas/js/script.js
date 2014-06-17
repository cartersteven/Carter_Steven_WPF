//This program will calculate if a driver can make it to the next gas station on the fuel remaining in their tank.
/**
 * Created by stevencarter on 6/16/14.
 */

var percent = prompt("What is the percent reading on the fuel gauge of your car?"); //This will ask the user what the fuel reading on their dashboard is.
var capacity = prompt("What is the maximum capacity of your fuel tank in gallons?"); //This will ask the user what the maximum fuel capacity of their car is.
var mileage = prompt("What is the average fuel mileage attained by your car?"); //This will ask the user what the average fuel mileage of their car is.

var distance = 200; //This sets the distance to the next fuel station to 200 miles.
var percentMul = percent / 100; //This makes the percent remaining in the tank into a number instead of a percentage.

var gallons = percentMul * capacity; //This finds out how many gallons of fuel are left in the tank.
var range = (percentMul * capacity) * mileage; //This calculates the remaining range of the car.

if (range > distance){
    //This prints the results of the above calculation to the console in the event that there is enough fuel left.
    console.log("Yes, you can make it without stopping for gas!");
} else {
    //This prints the results of the above calculations to the console in the event that there is enough fuel left.
    console.log("You only have " + gallons + " gallons of gas in your tank, better get gas now while you can!");
}