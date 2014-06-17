// This program will calculate the approximate cost of having a website built by a web design firm.
/**
 * Created by stevencarter on 6/8/14.
 */
var costBase = 50; //This sets the price, in Dollars, of the basic one page site with no other pages or scripting added.
var costPage = 10; //This is the extra cost per page of content created.
var costJava = 25; //This is the cost added if scripting with javascript is used.
var costPHP = 30; //This is the cost added if scripting with PHP is added.
var totalPrice = 0; //This variable creates the total price and sets it to zero.

var morePages = prompt("How many pages besides the homepage do you need?\n(For no extra pages, enter 0)"); //This prompt asks the user if they need any more pages built outside of the homepage.
JavaScript = prompt("Will the website need any JavaScript interactivity?\n'yes' or 'no'"); //This asks the user if they need any JavaScript interactivity built into the page.
PHP = prompt("Will elements of the website need to build themselves?\n'yes' or 'no'");//This asks the user if they will need to have elements of the website build themselves from databases.

if (JavaScript = "yes") {
    totalPrice += costJava
} //This adds the added cost of JavaScript scripting to the total cost of the web development quote, if the answer is yes.
if (PHP = "yes") {
    totalPrice += costPHP
} //This adds the added cost of PHP scripting to the total cost of the web development quote, if the answer is yes.

costPage *= morePages; //This will multiply the number of extra pages by the price per page

totalPrice += costBase + costPage; //This adds the basic cost to the calculated cost of the added pages. This should have JS and CSS costs already factored in.

console.log("The estimated price of creating your website would be $" + totalPrice + "."); //This command will print the results of the expression to the console.