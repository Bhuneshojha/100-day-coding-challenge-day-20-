"use strict";
//          100 days of coding challenge ( DAY 20 )
Object.defineProperty(exports, "__esModule", { value: true });
//   Question 01
function avrageScore(...scores) {
    // adds all scores together and divide by the number of the scores
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
// --Example: finding average
console.log(avrageScore(80, 50, 95, 73));
//   Question 02    
function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
// -- making a magic box
let addFive = makeAdder(6);
console.log(addFive(9)); // we have created magic box number that adds 6 to any number
//   Question 03 
let userProfile = (function () {
    // -- The users details
    let name = "Shyam";
    let age = 19;
    // This part shares the user's details
    return {
        displayInfo: function () {
            console.log(`Name: ${name}, age: ${age}`);
        }
    };
})();
// Now we have to fetch information of user from profile
userProfile.displayInfo();
