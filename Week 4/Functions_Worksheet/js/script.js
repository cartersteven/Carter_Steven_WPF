//This program will either calculate the circumference of a circle or how many bee stings it takes to kill an animal based on an input.
/**
 * Created by stevencarter on 6/21/14.
 */

function circumference(radius){
    circ = 2 * Math.PI * radius;
    return circ;
}
function beestings(weight){
    dead = weight / 8.666666667;
    return dead;
}

circumference(prompt("What is the radius of the circle?"));
console.log("The circumference of this circle is " + circ + ".");
beestings(prompt("What is the weight of the animal?"));
console.log("it takes " + dead + " beestings to kill this animal.");