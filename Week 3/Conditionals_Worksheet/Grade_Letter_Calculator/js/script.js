//This program will calculate the letter grade attained by a student based on their percent grade.
/**
 * Created by stevencarter on 6/17/14.
 */

var percent = prompt("What percent grade did you attain in the class?"); //This prompt asks teh user what percent they got in the class.

if (percent > 100){
    //This will give an error code if the provided range is outside of what is allowed.
    console.log("This grade is outside of the possible grade range.")
} else if (percent >= 95){
    //This will display that the user got an A+ because their grade was between 95 and 100
    console.log("You have a " + percent + "%, which means you have earned an A+ in the class!")
} else if (percent >= 90){
    //This will display that the user got an A because their grade was between 90 and 94
    console.log("You have a " + percent + "%, which means you have earned an A in the class!")
} else if (percent >= 85){
    //This will display that the user got a B+ because their grade was between 85 and 89
    console.log("You have a " + percent + "%, which means you have earned a B+ in the class!")
} else if (percent >= 80){
    //This will display that the user got a B because their grade was between 81 and 84
    console.log("You have a " + percent + "%, which means you have earned a B in the class!")
} else if (percent >= 76){
    //This will display that the user got a C+ because their grade was between 76 and 80
    console.log("You have a " + percent + "%, which means you have earned a C+ in the class!")
} else if (percent >= 73){
    //This will display that the user got a C because their grade was between 73 and 75
    console.log("You have a " + percent + "%, which means you have earned a C in the class!")
} else if (percent >= 70){
    //This will display that the user got a D because their grade was between 70 and 72
    console.log("You have a " + percent + "%, which means you have earned a D in the class!")
} else if (percent >= 0){
    //This will display that the user got an F because their grade was between 0 and 69
    console.log("You have a " + percent + "%, which means you have earned an F in the class!")
} else if (percent < 0){
    //This will give an error code if the provided range is outside of what is allowed.
    console.log("This grade is outside of the possible grade range.")
}