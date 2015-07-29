/**
 * Created by EWilliams on 7/29/15.
 */
//SDI Section 4 Wk4 Functions //
// Lottery Java//

// The Powerball has 5 random numbers bwtn 1 and 59 and 1 Powerball btwn 1 and 35//
//Florida Lottery has 6 random numbers btwn 1 and 53//
//No numbers may repeat for either//

// Start Main code

var lotteryType = prompt("Which type of lottery results do you want? /n Please Enter Powerball or Florida Lottery");
// establish which formula we are entering and main variable
console. log ("Which type of lottery results do you want? /n Please Enter Powerball or Florida Lottery");
//Print to console the prompt wording.//

//Stop main code//

//Begin function for  loop on type of lottery so user must answer//
function typeValidation(lotteryType){ //defining the function

    while (lotteryType === "") { //establishing the loop

        lotteryType = prompt ("You cannot leave this blank. /n Please enter eiter Powerball or Florida Lottery");//Prompt message for user
    }
    console.log ("You entered " + lotteryType + ".");//console message for no name entered
}
//End function with a loop//

//Starting main code
typeValidation (lotteryType); //calling function//
console.log (lotteryType); //printing to console the user's response//

//Stop Main code

//Begin new function for random number for Both Lotteries
function RandomlotGen(){

    var flLot;

    //Math.FlLot () = (Max - Min) * 2 < 53//
    //Math.round () - round to the nearest whole integer//
    flLot =Math.flLot () (Max - Min)* 4 < 53;
    flLot =Math.round (flLot);

    conosole.log (flLot);
}

RandomLotGen (flLot);//calling function





{
var PowLot;
//Math.PowLot() = (Max - min) * min < 59//
//Math.round () - round to the nearest whole integer//
Powlot =Math.powLot () (Max- Min) * min <59;
Powlot =Math.round (Powlot);

var PowBall;
//Math.PowBall () = (Max - 8) - 4 < 35//
//Math.round () - round to the nearest whole integer//
PowBall =Math.
}