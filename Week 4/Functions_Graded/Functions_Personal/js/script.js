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
    var print = milligrams[prompt("Which drip-coffee based drink are you using here? Your options are:\nA 'Mug'\nA 'Tall' Starbucks Iced Coffee with Milk\nA 'Grande' Starbucks Iced Coffee with Milk\n Or a 'Venti' Starbucks Iced Coffee with Milk").length];
    return print;
}; //This function will gather data from the user about which drink they drank.
var espresso = function(){
    //This section of comments makes note of the size and strength of several drinks that I commonly drink using espresso.
    //"Weak" Iced Espresso at home = 4 = 180mg
    //"Strong" Iced Espresso at home = 6 = 360mg
    //"Venti" Iced Caramel Macchiato = 5 = 225mg
    var milligrams = [0,0,0,0,180,225,360];
    var print = milligrams[prompt("Which espresso based drink are you using here? Your options are:\nA 'Weak' Iced Espresso at home\nA 'Strong' Iced Espresso at home\n Or a 'Venti' Starbucks Iced Caramel Macchiato").length];
    return print;
};
var energy = function(){
    //This section of comments makes note of the size and strength of several energy drinks that I commonly enjoy.
    //"Little NOS" = 10 = 160mg
    //"Big NOS" = 7 = 220mg
    //Any "Monsters" = 8 = 180mg
    var milligrams = [0,0,0,0,0,0,0,220,180,0,160];
    var print = milligrams[prompt("Which energy drink are you using here? Your options are:\nA 'Little NOS'\nA 'Big NOS'\nOr any of the various 'Monsters'").length];
    return print;
};

var caffeineTotal = [];

var drinks = prompt("How many drinks have you had today?\nBe honest.");
if (drinks == ""){
    alert("Please start again. You did not enter a value.");
    console.log("Please start again. You did not enter a value.");
} else if (drinks <= 0){
    alert("Please start again. The value cannot be at or below zero.");
    console.log("Please start again. The value cannot be at or below zero");
} else {

    while(drinks > 0){
        var callFunc = prompt("What was the next drink based on?\nCoffee, Espresso, or Energy.");
        if (callFunc == "coffee" || callFunc == "Coffee"){
            caffeineTotal.push(coffee())
        } else if(callFunc == "espresso" || callFunc == "Espresso"){
            caffeineTotal.push(espresso())
        } else if (callFunc == "energy" || callFunc == "Energy"){
            caffeineTotal.push(energy())
        } else if (callFunc == 0){
        } else {
            console.log('"' + callFunc + '" is not one of the accepted responses to the question.');
        }
        drinks--;
    }
}
var totalTotal = eval(caffeineTotal.join('+'));

if(totalTotal >= 400){
    
}

