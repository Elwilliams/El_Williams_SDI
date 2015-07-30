/**
 * Created by EWilliams on 7/29/15.
 */
//SDI Section 4 Wk4 Functions //
// Lottery Java//

// The Powerball has 5 random numbers bwtn 1 and 59 and 1 Powerball btwn 1 and 35//
//Florida Lottery has 6 random numbers btwn 1 and 53//
//No numbers may repeat for either//

// Start Main code

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

//Pause main code

//Start functions for math objects to create lottery numbers for florida Lottery//

function flLot (max,min,num) { //To get a random number
    //Formula used is (Max-Min) + 2

    var FlLotArray = [];

    for (var i = 0; i < 6; i++) {
        var randomFlLot = Math.random() * (53 - 1) + 2;// To get a random number between 1 and 53
        FlLotArray[i] = Math.round(randomFlLot); // To round to the nearest whole number

    }
    return FlLotArray;
    console.log (FlLotArray);
}
//End Function for Florida Lottery random number

// Start function for a math object to create a powerball number//
function randomPowerball(max,min) {

    //Formula used (Max-Min) + 8
    var randomPowerB = Math.random() * (max - min) + 3;// To get a random number between 1 and 53
    randomPowerB = Math.round (randomPowerB); // To round to the nearest whole number
    console.log (randomPowerB);
}


// End function for the one Powerball number

//Start conditionals

if// conditional to choose the Florida Lottery
(lotteryType === "Florida Lottery") {
    console.log("Great! The Florida Lottery Numbers are coming right up"); //establishing the florida lottery formula
    flLot (53,1); //calling function to create the florida lotteries random numb



}else if//conditional to choose powerball

(lotteryType === "Powerball") {
    console.log("Great! The Powerball Numbers are.....");// estabishing the powerball formula
    randomPowerball(59,1);//calling function for the Powerball number to 35
    randomPowerball(49,6);
    randomPowerball(39,29);
    randomPowerball(28,2);
    randomPowerball(38,3);
    console.log ("And the Powerball is...")
    randomPowerball(35,1);
}

// End Conditional to select

//Start Main Code//