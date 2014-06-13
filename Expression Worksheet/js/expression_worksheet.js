//This is the file containing all of the work for the Expression Worksheet in week 2.
/**
 * Created by stevencarter on 6/7/14.
 */

// This section is the Dog Years problem.
var sparkyAge_human = 3; //This is Sparky's age in standard human years.
var ageMultiplier = 7; //This is the multiplier that turns Sparky's human age to dog age.
var sparkyAge_dog = sparkyAge_human * ageMultiplier; //This is the expression that calculates Sparky's age in dog years.
console.log("Sparky is " + sparkyAge_human +" human years old which is " + sparkyAge_dog + " in dog years"); //This command will print the result to the console in the browser.

console.log(" "); //This log in the console is for the purpose of separating the answers in the console. This provides for easier reading

//This section is the Slice of Pie Part 1 problem.
var pizzaSlices = 8; //This is the number of slices per pizza.
var pizzas = 6; //This is the number of pizzas at the party.
var partiers = 20; //This is the number of people attending the party.
var slices_per_person = ( pizzaSlices * pizzas ) / partiers; //This expression calculates the number of slices of pizza that each partygoer gets.
console.log("Each person ate " + slices_per_person + " slices of pizza at the party.") //This command will print the number of slices that each person gets at the party.

console.log(" "); //This log in the console is for the purpose of separating the answers in the console. This provides for easier reading

//This section is the Slice of Pie Part 2 problem.
var sparkySlices = ( pizzaSlices * pizzas ) % partiers; //This calculates the remainder of pizza for Sparky after everyone has had their pizza.
console.log("Sparky got " + sparkySlices + " slices of pizza."); //This command will print the number of slices of pizza that Sparky will get.

console.log(" "); //This log in the console is for the purpose of separating the answers in the console. This provides for easier reading

//This section is the Average Shopping Bill problem.
var prices = [89.62 , 92.14 , 112.15 , 105.92 , 97.68]; //This array sets out the values of the shopping trips.
var priceTotal = prices[0] + prices[1] + prices[2] + prices[3] + prices[4]; //This expression adds all of the values of the array.
var priceAverage = priceTotal / 5; //This expression calculates the average of all of the values in the array.
console.log("You have spent a total of $" + priceTotal +" on groceries over 5 weeks. That is an average of $" + priceAverage + " per week"); //This command prints the result of the expression to the console.

console.log(" "); //This log in the console is for the purpose of separating the answers in the console. This provides for easier reading

//This section is the Discounts problem.
var oprice = 7.75; //This describes the original price of the item.
var discount = 20; //This describes the discount percentage.
var description = "Espresso Roast Coffee"; //This describes what the item is.
var tax = 6; //This describes the percent of sales tax added to the item.
var nprice = oprice * (100 - discount) / 100; //This expression calculates the new price without tax
var nprice_tax = nprice + (nprice * (tax / 100)); //This expression calculates the new price with tax
console.log("Your " + description + " was originally $" + oprice + ", but after a " + discount + "% discount, it is now $" + nprice + " without tax, and $" + nprice_tax + " with tax.") //This command prints the results of the expressions to the console.