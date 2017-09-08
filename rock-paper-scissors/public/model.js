/**
 * Goal - Write Rock-Paper-Scissors game model using bit logic
 *   - Memory - as compact as possible (every bit means something)
 *   - State Changes and Evaluation
 *      - using only bitwise operations, assignments, and sub-routines (no standard math/logic ops, loops, recursion, conditionals)
 */

/**
 * Each player's hand is represented by 2 bits:
 *  00 - No hand picked
 *  01 - Rock
 *  10 - Paper
 *  11 - Scissors
 */

/**
 * Round state is represented by 2 bits:
 *  00 - Round in progress
 *  01 - Player 1 won round
 *  10 - Player 2 won round
 *  11 - Players 1 & 2 tied
 */

var rpsState = 0;

function nextRound(){

}

function processRound(userMove){

}

if ((!this.hasOwnProperty('Window') || !(this instanceof this.Window)) && typeof module === "object" && module !== null){
    module.exports = {
        getState: () => rpsState,
        reset: nextRound,
        move: processRound
    };
}
