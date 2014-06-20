/**
 * Created by shaunacarter on 6/20/14.
 */
function dogYears(age){
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old.");
}

var age1 = 4;
dogYears(age1);
dogYears(prompt("How old in calendar years is sparky?"));
dogYears(5);