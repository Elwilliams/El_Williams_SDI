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
console.log("lotteryType");//Value of lotteryType print to console.

//Stop main code//

//Begin function for  loop on type of lottery so user must answer//
function typeValidation(lotteryType) { //defining the function

    var timesUserClicked = 1;//establish user clicking as a term.

    while (lotteryType === "") { //establishing the loop

        lotteryType = prompt("You cannot leave this blank. Please enter eiter Powerball or Florida Lottery");//Prompt message for user

        timesUserClicked++;// establish a condition for the user just clicking ok without answering

        if (timesUserClicked === 15) { //establish after 15 clicks the user needs to reload... No numbers
            console.log("If you do not enter Florida Lottery or Powerball you will not get the numbers and you must reload the page!!!");
            break;//mark the break of the loop
        }
        console.log("You entered " + lotteryType + ".");//console message for no name entered //print user response to prompt
    }
}

//End Function for user input of Lottery type w/ a loop and a break at 15 clicks.
//Starting main code

typeValidation (lotteryType);//call function
console.log (lotteryType);// print the users input for lotteryType.

var ranNum;// variable for printing numbers to console.

//Pause main code

// Start function for a math object to create a random number//
function randomLotNum(max, min) {

    var ranLotArray = []; //unused array variable as it kept throwing undefined out
    //remained in code for future correction//however, it works without it...

    //Formula used (Max-Min) + 3

    var randomLotNum = Math.random() * (max - min) + 3;// To get a random number between 1 and 53
    randomLotNum =Math.round(randomLotNum); // To set the array to the random number and to the nearest whole number.

    return randomLotNum;// out process from the fuction that gives us the random numbers///
}
// End function to create a random number

//Start conditionals

if// conditional to choose the Florida Lottery
(lotteryType === "Florida Lottery") {/// if the user entered Florida Lottery correctly, they get the numbers..
    console.log("Great! The Florida Lottery Numbers are coming right up"); //establishing the florida lottery formula
    ranNum = randomLotNum (53, 1, 6); //calling function to create the florida lotteries random numbers, Number 1
    console.log ("The Florida Lottery Numbers are " +  ranNum);
    ranNum = randomLotNum (53, 1, 6); //Number 2
    console.log (ranNum);
    ranNum = randomLotNum (53, 1, 6); //Number 3
    console.log (ranNum);
    ranNum = randomLotNum (53, 1, 6);//Number 4
    console.log (ranNum);
    ranNum = randomLotNum (53, 1, 6);//Number 5
    console.log (ranNum);
    ranNum = randomLotNum (53, 1, 6);//Number 6
    console.log (ranNum);

}else if//conditional to choose powerball

(lotteryType === "Powerball") { ///if the user enttered Powerball correctly, they get the numbers.
    console.log("Great! The Powerball Numbers are coming up....");// estabishing the powerball formula
    ranNum = randomLotNum (59,1,5); // Calling function for random number
    console.log ("The Powerball Numbers are ");// Number 1 w/ intro message
    console.log (ranNum);
    ranNum = randomLotNum (59,1,5); // Number 2
    console.log (ranNum);
    ranNum = randomLotNum (59,1,5); //Number 3
    console.log (ranNum);
    ranNum = randomLotNum (59,1,5);// Number 4
    console.log (ranNum);
    ranNum = randomLotNum (59,1,5); //Number 5
    console.log (ranNum);
    ranNum = randomLotNum (59,1,5); //Powerball/ number 6
    console.log ("And the Powerball is " + ranNum)
}
//End Conditional...

//Start Main Code//
console.log ("Did you win?");// closing comment

//End code

///Additional Comment///
///I know that an array should have been used, but I kept getting that the ranLotArray was undefined despite everything
/// I tried to do. In fact the num is still in place in all the variables were I console.log it
/// I established a variable with [];, changed the var in the function at the .round line added the [i]
///it never worked. So this may not be perfect but it is working!