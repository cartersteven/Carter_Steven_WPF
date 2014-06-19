//This program will determine if an image will fit into a space in a div after a border is added.
/**
 * Created by Stevencarter on 6/18/14.
 */

var imHeight = prompt("What is the height of the image, in pixels?"); //This asks the user how high the image they want to use is.
var imWidth = prompt("What is the width of the image, in pixels?"); //This asks the user how wide the image is.
var holeHeight = prompt("What is the height of the page div, in pixels?"); //This asks the user how high the div in the page is.
var holeWidth = prompt("What is the width of the page div, in pixels?"); //This asks the user how wide the div is.
var borSize = prompt("What is the value of the size of the border, in pixels?"); //Ths asks the user what the size of the border they are adding is.

var borHeight = imHeight + (2 * borSize); //This adds the total size of the border to the height of the image
var borWidth = imWidth + (2 * borSize); //This adds the total size of the border to the width of the image

if (imHeight == ""){
    //This makes sure there is a value entered into imHeight.
    console.log("You left the image height prompt empty. Please start again.");
} else if (imWidth == ""){
    //This makes sure there is a value entered into imWidth.
    console.log("You left the image width prompt empty. Please start again.");
} else if (holeHeight == ""){
    //This makes sure there is a value entered into holeHeight.
    console.log("You left the div height prompt empty. Please start again.");
} else if (holeWidth == ""){
    //This makes sure there is a value entered into holeWidth.
    console.log("You left the div width prompt empty. Please start again.");
} else if (borSize == ""){
    //This makes sure there is a value entered into borSize.
    console.log("You left the Border Size prompt empty. Please start again.");
} else if (borSize < 0){
    //This makes sure there is a positive or zero value.
    console.log("Please start again. There can not be a negative border value. The value that you entered is " + borSize + ".");
} else if (borWidth > holeWidth) {
    //This finds out if the hole size is smaller than the image size.
    console.log("The image with the border added is too big for the div that it is going into.");
} else if (borHeight > holeHeight ){
    //This finds out if the hole size is smaller than the image size.
    console.log("The image with the border added is too big for the div that it is going into.");
} else {
    //This states that the image will fit.
    console.log("The image will fit into the div.");
}

/*if (imHeight == ""){
    //This checks to make sure there is a value in the 'avg' variable.
    console.log("You did not enter anything into the average speed prompt. Refresh the page and try again.")
} else if (imWidth == ""){
    //This checks to make sure there is a value in the 'dist' variable.
    console.log("You did not enter anything into the distance prompt. Refresh the page and try again.")
} else if (holeHeight == ""){
    //This checks to make sure there is a value in the 'time' variable.
    console.log("You did not enter anything into the time remaining prompt. Refresh the page and try again.")
} else if (holeWidth == ""else {
    speedNeed <= avg ? console.log("You will make it to your destination on time") : console.log("You will not make it on time. The average speed that you need to maintain is at least " + speedNeed + "mph.")
}*/