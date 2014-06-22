//This program will calculate the caffeine taken in on a day and display how much.
//If it is over the FDA guidelines, the program will display an error code.
/**
 * Created by stevencarter on 6/21/14.
 */

var coffee = function(){
    //This comment section has the sizes of drip coffee based drinks and their amounts of caffeine based on size.
    //mug = 3 = 60mg
    //tall = 4 = 90mg
    //grande = 6 = 125mg
    //venti = 5 = 170mg
    var milligrams = [0,0,0,60,90,170,125];
    var print = milligrams[prompt("type 'mug', stupid.").length];
    return print;
}; //This function will gather data from the user about which drink they drank.

var coffeeTotal = [] , espressoTotal = [] , energyTotal = [];

var drinks = prompt("How many drinks have you had today?\nBe honest.");
if (drinks == ""){
    alert("Please start again. You did not enter a value.");
    console.log("Please start again. You did not enter a value.");
} else if (drinks <= 0){
    alert("Please start again. The value cannot be at or below zero.");
    console.log("Please start again. The value cannot be at or below zero");
} else {

    while(drinks > 0){
        var callFunc = prompt("What was the next drink based on?\nEnter the number zero if you made an error and entered a higher number in the number of drinks question than intended.");
        if (callFunc == "coffee"){
            coffeeTotal.push(coffee())
        } else if(callFunc == "espresso"){
            espressoTotal.pust(espresso())
        } else if (callFunc == "energy"){
            energyTotal.push(energy())
        } else if (callFunc == 0){

        } else {
            console.log('"' + callFunc + '" is not one of the accepted responses to the question.');
        }
        drinks--;
    }
}

console.log(coffeeTotal , espressoTotal , energyTotal)

/*var repeat, studentArr = [], markArr = [];
while (repeat !== 'n' && repeat !== 'N'){
    studentArr.push(prompt("Enter Student Name: "));
    markArr.push(prompt("Enter Student Mark: "));
    repeat = prompt ("Do you want to enter another student: y/n");
}
console.log('studentArr, markArr',studentArr, markArr);*/
