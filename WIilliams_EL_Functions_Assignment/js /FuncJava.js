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

//Starting main code

typeValidation (lotteryType);
console.log (lotteryType);
//Start conditionals

if// conditional to choose the right math object
(lotteryType = "Florida Lottery"){

    console.log ("Great! The Florida Lottery Numbers are coming right up") //establishing the florida lottery formula
    var flLot = Math.random (1 -)

    (lotteryType = "Powerball") {
        console.log("Great! The Powerball Numbers are coming right up");// estabishing the powerball formula

        function powerB(min, max) {

            var randomFive = [];
            for (var i = 0; i <= 59; i++) {
                randomFive [i] = Math.random() * (min - max) + max;
                randomFive [i] = Math.round(randomFive[i]);
            }

            return randomFive;

            var powerBall = [];
            for (var i = 0; i <= 35; i++) {
                powerBall [i] = Math.random() * (min - max) + 1;
                powerball [i] = Math.round(PowerBall [i]);

            }
            return PowerBall;

    }
}

//Start Main Code//
flRandom (randomSix);
console.log (randomSix);

powerB (randomfive);
powerB (powerBall);}else if




