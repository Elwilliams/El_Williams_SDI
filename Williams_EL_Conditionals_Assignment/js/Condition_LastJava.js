/**
 * Created by EWilliams on 7/23/15.
 */
// Erica Williams 7/21/2015//
//SDI Section 2//
//Conditional Assignment Week 3//

//formula to calculate hotel cost is noofnights * typeofroom + extras//

alert("The cost to stay at the resort can be calculated by answering the following questions"); //alert of intention //first user input
console.log ("The cost to stay at the resort can be calculated by answering the following questions");//print to console

var noofnights = prompt ("How many nights would you like to stay?");//first user prompt
console.log ("How many nights would you like to stay");  //print to console
console.log (noofnights);

if (noofnights === "") { //if user enters nothing
    noofnights = prompt("Please enter the number of nights to proceed");
    console.log("Please enter the number of nights to proceed")

}else{
    noofnights = Number(""); //if user enters a value
    console.log (noofnights); //print to console

}

var typeofroom = prompt ("For Regular Room enter 50 or For Deluxe Room enter 100");
console.log ("For Regular Room enter 50 or For Deluxe Room enter 100");
console.log (typeofroom);//print to console

var extras = prompt ("For Extras pack 1 enter 50 for Extras pack 2 enter 20");
console.log ("For Extras pack 1 enter 50 for Extras pack 2 enter 20");
console.log (extras);

var nightsCost = Number(noofnights) * Number(typeofroom);//calculation 1 of formula
console.log (nightsCost);// print to console

var totalCost = Number(nightsCost) + Number(extras);//formula calculation for total cost
console.log (totalCost);//print to console

prompt (totalCost); //show user the total cost