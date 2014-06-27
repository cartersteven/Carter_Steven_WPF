//This program will calculate the actual download speed you can get through your Internet Service Provider.
/**
 * Created by stevencarter on 6/21/14.
 */

var companySpeedMultiplier = function (comp,adspeed){
    var companies["Bright House", "Comcast", "Verizon", "AT&T", "Hughes Net", "Juno", "Time Warner", "Google"];
    var percentage[.15, .08, .1, .1, .8, 1, .08, .5];
    var pos = companies.indexOf(comp); //This finds the position of the speed ratio number in the companies array.
    var multiplier = percentage[pos];
    var actspd = adspeed * multiplier
};

