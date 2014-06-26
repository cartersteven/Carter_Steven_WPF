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
}; //This function will gather data from the user about which drink they drank.
var energy = function(){
    //This section of comments makes note of the size and strength of several energy drinks that I commonly enjoy.
    //"Little NOS" = 10 = 160mg
    //"Big NOS" = 7 = 220mg
    //Any "Monsters" = 8 = 180mg
    var milligrams = [0,0,0,0,0,0,0,220,180,0,160];
    var print = milligrams[prompt("Which energy drink are you using here? Your options are:\nA 'Little NOS'\nA 'Big NOS'\nOr any of the various 'Monsters'").length];
    return print;
}; //This function will gather data from the user about which drink they drank.

var caffeineTotal = []; //This starts the array that the data goes into from the data collection.

var drinks = prompt("How many drinks have you had today?\nBe honest."); //This sets how many times the loop will run.

while((drinks < 0 || drinks == "")) {
drinks = prompt ("ERROR\nThis is an invalid number. Please input a number greater than or equal to zero.")
}

    while(drinks > 0){
        //This starts the loop for data collection
        var callFunc = prompt("What was the next drink based on?\nCoffee, Espresso, or Energy."); //This makes the computer know which function to invoke.
        if (callFunc == "coffee" || callFunc == "Coffee"){
            //This invokes the coffee function in the event that coffee is put in the box.
            caffeineTotal.push(coffee())
        } else if(callFunc == "espresso" || callFunc == "Espresso"){
            //This invokes the espresso function in the event that espresso is put in the box.
            caffeineTotal.push(espresso())
        } else if (callFunc == "energy" || callFunc == "Energy"){
            //This invokes the energy function in the event that energy is put in the box.
            caffeineTotal.push(energy())
        } else {
            //This is a typo alert.
            console.log('"' + callFunc + '" is not one of the accepted responses to the question.');
        }
        drinks--; //This decriments the value of drinks every time the loop runs.
    }
var totalTotal = eval(caffeineTotal.join('+')); //This totals the values from the array created on line 36.

if(totalTotal >= 400){
    //This logs a statement saying to stop drinking caffeine because you are over the limit
    var more = totalTotal - 400;
    console.log("You have had " + more + "mg of caffeine over the FDA Guidelines on caffeine suggest. No more for you.");
} else {
    //This states the total from the data.
    console.log("You have had " + totalTotal + "mg of caffeine so far today. Remember that the FDA Guidelines set the ceiling at 400mg.")
}

