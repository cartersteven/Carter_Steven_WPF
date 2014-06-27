//This program will calculate the actual download speed you can get through your Internet Service Provider.
/**
 * Created by stevencarter on 6/21/14.
 */

var companySpeedMultiplier = function (comp,adspeed){
    //This takes the inputs and calculates the actual download speed.
    var companies = ["Bright House", "Comcast", "Verizon", "AT&T", "Hughes Net", "Juno", "Time Warner", "Google"];
    var percentage = [.15, .07, .1, .1, .8, 1, .07, 1];
    var pos = companies.indexOf(comp); //This finds the position of the speed ratio number in the companies array.
    var multiplier = percentage[pos];
    actspd = adspeed * multiplier;
    return actspd;
};
alert("This calculator will calculate the actual speeds of internet service providers based on their advertised plan speeds.");//This sets the rules for the program.

var compnumber = prompt("How many companies or plans are you comparing today?"); //This asks how many times to run the function.

var compcount = 1;//This sets the counter to 1

var suffix;//This starts the suffix variable

while(compnumber > 0){
    if (compcount == 1){//This bases the grammar on the number of the company in succession.
        suffix = "st";
    } else if (compcount == 2){
        suffix = "nd";
    } else if (compcount == 3){
        suffix = "rd";
    } else {
        suffix = "th";
    }
    //This creates the final output for the program.
    var speed = companySpeedMultiplier(prompt("What is the " + compcount + suffix + " company you are comparing today?\nPlease type precisely.\nYour choices are:\nBright House\nComcast\nVerizon\nAT&T\nHughes Net\nJuno\nTime Warner\nGoogle"),prompt("What is the advertised download speed on that plan (in Mb/s)?"));
    console.log("The " + compcount + suffix + " plan has an actual download speed of " + speed + "Mb/s.");
    compnumber--;
    compcount++;
}