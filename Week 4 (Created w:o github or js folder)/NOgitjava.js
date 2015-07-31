/**
 * Created by EWilliams on 7/29/15.
 */

var lotteryType = prompt("Which type of lottery results do you want?  Please Enter Powerball or Florida Lottery");
// establish which formula we are entering and main variable
console.log("Which type of lottery results do you want? Please Enter Powerball or Florida Lottery");
//Print to console the prompt wording.//
console.log("lotteryType");

//Stop main code//

//Begin function for  loop on type of lottery so user must answer//
function typeValidation(lotteryType) { //defining the function

    var timesUserClicked = 1;

    while (lotteryType === "") { //establishing the loop

        lotteryType = prompt("You cannot leave this blank. Please enter eiter Powerball or Florida Lottery");//Prompt message for user

        timesUserClicked++;// establish a condition for the user just clicking ok without answering

        if (timesUserClicked === 15) {
            console.log("If you do not enter Florida Lottery or Powerball you will not get the numbers and you must reload the page!!!");
            break;
        }
        console.log("You entered " + lotteryType + ".");//console message for no name entered
    }
}

//End Function for user input of Lottery type w/ a loop and a break at 15 clicks.
//Starting main code

typeValidation (lotteryType);//call function
console.log (lotteryType);// print the users input for lotteryType.

var ranNum;

//Pause main code

// Start function for a math object to create a random number//
function randomLotNum(max, min) {

    var ranLotArray = [];

    //Formula used (Max-Min) + 3

        var randomLotNum = Math.random() * (max - min) + 3;// To get a random number between 1 and 53
        randomLotNum =Math.round(randomLotNum); // To set the array to the random number and to the nearest whole number.

        return randomLotNum;
}
// End function to create a random number

//Start conditionals

if// conditional to choose the Florida Lottery
(lotteryType === "Florida Lottery") {
    console.log("Great! The Florida Lottery Numbers are coming right up"); //establishing the florida lottery formula
    ranNum = randomLotNum (53, 1, 6); //calling function to create the florida lotteries random numb
    console.log ("The Florida Lottery Numbers are " +  ranNum);
    ranNum = randomLotNum (53, 1, 6);
    console.log (ranNum);
    ranNum = randomLotNum (53, 1, 6);
    console.log (ranNum);
    ranNum = randomLotNum (53, 1, 6);
    console.log (ranNum);
    ranNum = randomLotNum (53, 1, 6);
    console.log (ranNum);
    ranNum = randomLotNum (53, 1, 6);
    console.log (ranNum);

}else if//conditional to choose powerball

(lotteryType === "Powerball") {
    console.log("Great! The Powerball Numbers are coming up....");// estabishing the powerball formula
    ranNum = randomLotNum (59,1,5);
    console.log ("The Powerball Numbers are ");
    console.log (ranNum);
    ranNum = randomLotNum (59,1,5);
    console.log (ranNum);
    ranNum = randomLotNum (59,1,5);
    console.log (ranNum);
    ranNum = randomLotNum (59,1,5);
    console.log (ranNum);
    ranNum = randomLotNum (59,1,5);
    console.log (ranNum);
    ranNum = randomLotNum (59,1,5);
    console.log ("And the Powerball is " + ranNum)
}
//End Conditional...

//Start Main Code//
console.log ("Did you win?");

//End code
