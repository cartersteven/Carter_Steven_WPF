//This program will calculate the gallons of fuel needed to travel a certain distance at a certain fuel mileage.
/**
 * Created by stevencarter on 6/8/14.
 */

var dist = prompt("How long is the trip in miles?"); //This prompt will ask the user how far they plan to travel.
var mileage = prompt("How many miles per gallon does your car get on average?"); //This prompt asks what the average MPG of the car is.
var price = prompt("What is the average price of gas?") //This prompt will gather information on the average price of gasoline from the user.

var cost = price * (dist / mileage); //This expression calculates the cost of a trip.
console.log("You will need to pay " + cost + " dollars to travel " + dist + " miles."); //This command will print the results of the expression to the console.