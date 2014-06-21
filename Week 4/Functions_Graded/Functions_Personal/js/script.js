//This program will calculate the caffeine taken in on a day and display how much.
//If it is over the FDA guidelines, the program will display an error code.
/**
 * Created by stevencarter on 6/21/14.
 */
var test = function(){
    console.log("The test worked!");
};
var drinks = prompt("How many drinks have you had today?\nBe honest.");
if (drinks == ""){
    alert("Please start again. You did not enter a value.");
    console.log("Please start again. You did not enter a value.");
} else if (drinks <= 0){
    alert("Please start again. The value cannot be at or below zero.");
    console.log("Please start again. The value cannot be at or below zero");
} else {
    while(drinks > 0){
        prompt("What was the next drink based on?");
    }
}