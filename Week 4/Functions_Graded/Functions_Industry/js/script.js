//This program will calculate the actual download speed you can get through your Internet Service Provider.
/**
 * Created by stevencarter on 6/21/14.
 */

var companySpeedMultiplier = function (comp,adspeed){
    var companies = ["Bright House", "Comcast", "Verizon", "AT&T", "Hughes Net", "Juno", "Time Warner", "Google"];
    var percentage = [.15, .07, .1, .1, .8, 1, .07, 1];
    var pos = companies.indexOf(comp); //This finds the position of the speed ratio number in the companies array.
    var multiplier = percentage[pos];
    actspd = adspeed * multiplier;
    return actspd;
};
alert("This calculator will calculate the actual speeds of internet service providers based on their advertised plan speeds.");

var compnumber = prompt("How many companies or plans are you comparing today?");

var compcount = 1;

var suffix;

while(compnumber > 0){
    if (compcount == 1){
        suffix = "st";
    } else if (compcount == 2){
        suffix = "nd";
    } else if (compcount == 3){
        suffix = "rd";
    } else {
        suffix = "th";
    }
    var speed = companySpeedMultiplier(prompt("What is the " + compcount + suffix + " company you are comparing today?\nPlease type precisely.\nYour choices are:\nBright House\nComcast\nVerizon\nAT&T\nHughes Net\nJuno\nTime Warner\nGoogle""),prompt("What is the advertised download speed on that plan?"));
    console.log("The " + compcount + suffix + " plan has an actual download speed of " + speed + "Mb/s.");
    compnumber--;
    compcount++;
}