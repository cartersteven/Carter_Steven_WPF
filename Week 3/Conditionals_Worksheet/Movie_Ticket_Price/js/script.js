//This program will calculate the movie price based on time and age.
/**
 * Created by stevencarter on 6/17/14.
 */

var age = prompt("What age are you?"); //This prompt ascertains the viewer's age.
var time = prompt("What is the time?"); //This ascertains the time of the movie.

if (age < 2){
    //This states that small children should not be taken to movie theaters.
    console.log("Small children should not be taken into a movie theater. They can cause distractions.")
} else if (age < 10){
    //This states that for children, the ticket price is $7.
    console.log("The ticket price is $" + 7);
} else if (age > 55){
    //this states that for seniors, the ticket price is $7.
    console.log("The ticket price is $" + 7);
} else if (time < 3){
    //this states that before 3, the ticket price is $12.
    console.log("The ticket price is $" + 12);
} else if (time >5){
    //this states that after 5, the ticket price is $12.
    console.log("The ticket price is $" + 12);
} else {
    //this states that for all other conditions, the ticket price is $7.
    console.log("The ticket price is $" + 7);
}