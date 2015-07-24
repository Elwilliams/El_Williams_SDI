/**
 * Created by EWilliams on 7/23/15.
 */
// Erica Williams 7/21/2015//
//SDI Section 2//
//Conditional Assignment Week 3//

//formula to calculate hotel cost is noofnights * typeofroom + extras//

alert("The cost to stay at the resort can be calculated by answering the following questions"); //alert of intention //first user input
console.log ("The cost to stay at the resort can be calculated by answering the following questions");//print to console the alert statement

var noOfNights = prompt ("How many nights would you like to stay?");//first user prompt
console.log ("How many nights would you like to stay");  //print to console the statement
console.log (noOfNights);//print to console the number value

(noOfNights === "")? console.log("Whoops, Please refresh the page and start again"):console.log("Great, Lets move on to the next question"); //Ternary for not entering a value in NoOfNights//

var typeOfRoom = prompt ("For Regular Room enter 50 or For Deluxe Room enter 100");// User prompt 2
console.log ("For Regular Room enter 50 or For Deluxe Room enter 100"); //print to console
console.log (typeOfRoom);//print to console

if  (typeOfRoom === "") {
    typeOfRoom = prompt("Whoops, please enter either 50 or 100");
    console.log("Whoops, please enter either 50 or 100");
}else if
    (typeOfRoom === "100"){
    console.log("Great, Let's keep going");
}else
    (typeOfRoom === "50");
    console.log ("Great, Let's keep going");

var extras = prompt ("For Extras pack 1 enter 50 for Extras pack 2 enter 20");//user prompt 3
console.log ("For Extras pack 1 enter 50 for Extras pack 2 enter 20");// print to console statement
console.log (extras);// print to console value for extras

var nightsCost = Number(noOfNights) * Number(typeOfRoom);//calculation 1 of formula
console.log (nightsCost);// print to console

var totalCost = Number(nightsCost) + Number(extras);//formula calculation for total cost
console.log (totalCost);//print to console

prompt (totalCost); //show user the total cost

if (totalCost > 500 && noOfNights > 5){
    console.log ("Congradulations, You get a free nights stay!");
    prompt (("Congradulations, You get a free nights stay!"));
}else
    console.log ("Thank you for using the Resort Cost calculator, We hope to see you soon");
    prompt ("Thank you for using the Resort Cost calculator, We hope to see you soon");


