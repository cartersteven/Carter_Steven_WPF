//This program will determine if an image will fit into a space in a div after a 10px order is added.
/**
 * Created by Stevencarter on 6/18/14.
 */

var imHeight = prompt("What is the height of the image?"); //This asks the user how high the image they want to use is.
var imWidth = prompt("What is the width of the image?"); //This asks the user how wide the image is.
var holeHeight = prompt("What is the height of the page div?"); //This asks the user how high the div in the page is.
var holewidth = prompt("What is the width of the page div?"); //This asks the user how wide the div is.

var borHeight = imHeight + 20; //This adds the total size of the border to the height of the image
var borWidth = imWidth + 20; //This adds the total size of the border to the width of the image