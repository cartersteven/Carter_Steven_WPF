//This program will calculate how many of an item from a list will fit into an elevator of variable capacity.
/**
 * Created by stevencarter on 6/17/14.
 */

var weightList = [0,1,2,3,4,130,0.375,7,8,9,10,2568,0.123,143]; //This Array holds the weights of the items to be inserted
                                                            //into the elevator.The reason that the actual values are
                                                            //spread out is because the input into the prompt asking
                                                            // which one will find how many letters there are and use
                                                            // that space in the array

var cap = prompt("What is the capacity of the elevator?"); //This asks the user what the capacity of the elevator is.
var item = prompt("Which item do you want to put into the elevator? Will it be . . .\n'Banana'?\n'Sheep'?\n'Mini Cooper'?\n'Rubber Ducky'?\n'Mister Rogers'?"); //This asks the user what item they want to put in the elevator.
var numberFit = 0; //This variable sets up the number that can fit into an elevator.

var weight = weightList[item.length]; //This will take the item entered and convert it into weight.
if (cap == ""){
    //This will display an error if there is nothing entered into the first prompt.
    console.log("You did not enter anything into the first prompt. Please Refresh and try again.");
} else if (item == ""){
    //This will display an error if there is nothing entered into the second prompt.
    console.log("You did not enter anything into the second prompt. Please Refresh and try again.");
} else if (weight > cap){
    //This will produce an error that states that not a single item can fit.
    console.log("You cannot fit a single " + item + " onto this elevator.");
} else {
    //This divides the capacity by the item's weight and displays how many can fit onto the elevator.
    numberFit = cap / weight;
    console.log("You can fit " + numberFit + item + "'s onto this elevator.")
}