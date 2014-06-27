//This program will calculate the actual download speed you can get through your Internet Service Provider.
/**
 * Created by stevencarter on 6/21/14.
 */

var companySpeedMultiplier = function (comp,adspeed){
    while (comp!="Bright House" || comp!="Comcast" || comp!="Verizon" || comp!="AT&T" || comp!="Hughes Net" || comp!="Juno" || comp!="Time Warner" || comp!="Google"){
        comp = prompt("ERROR\n\nThat is not an acceptable response. Please type precisely.\nYour choices are:\nBright House\nComcast\nVerizon\nAT&T\nHughes Net\nJuno\nTime Warner\nGoogle");
    }
    var companies["Bright House", "Comcast", "Verizon", "AT&T", "Hughes Net", "Juno", "Time Warner", "Google"];
    var percentage[.15, .07, .1, .1, .8, 1, .07, 1];
    var pos = companies.indexOf(comp); //This finds the position of the speed ratio number in the companies array.
    var multiplier = percentage[pos];
    actspd = adspeed * multiplier;
    return actspd;
};
alert("This calculator will calculate the actual speeds of internet service providers based on their advertised plan speeds.");
var compnumber = prompt("How many companies or plans are you comparing today?");

while(compnumber <= 0){
    compnumber = prompt("ERROR\n\nThis is not an acceptable value. Please enter a number above zero.");
}
var compcount = 1;
if (compcount == 1){
    var suffix = "st";
} else if (compcount == 2){
    var suffix = "nd";
} else if (compcount == 3){
    var suffix = "rd";
} else {
    var suffix = "th";
}
while(compnumber > 0){
    if (compcount == 1){
        var suffix = "st";
    } else if (compcount == 2){
        var suffix = "nd";
    } else if (compcount == 3){
        var suffix = "rd";
    } else {
        var suffix = "th";
    };
    var speed = companySpeedMultiplier(prompt("What is the " + compcount + suffix + "plan you are comparing today?"),prompt("What is the advertised download speed on that plan?"))
    console.log("The " + compcount + suffix + " plan has an actual download speed of " + speed + ".");
}