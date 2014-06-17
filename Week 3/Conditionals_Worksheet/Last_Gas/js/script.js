//This program will calculate if a driver can make it to the next gas station on the fuel remaining in their tank.
/**
 * Created by stevencarter on 6/16/14.
 */

var percent = prompt("What is the percent reading on the fuel gauge of your car?");
var capacity = prompt("What is the maximum capacity of your fuel tank in gallons?");
var mileage = prompt("What is the average fuel mileage attained by your car?");

var distance = 200;
var percentMul = percent / 100;

var gallons = percentMul * capacity
var range = (percentMul * capacity) * mileage;

if (range > distance){
    console.log("Yes, you can make it without stopping for gas!");
} else {
    console.log("You only have " + gallons + " gallons of gas in your tank, better get gas now while you can!");
}