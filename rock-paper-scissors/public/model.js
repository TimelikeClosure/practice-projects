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
const USER_MASK = 1 << 1 | 1;
const COMP_MASK = USER_MASK << 2;

/**
 * Round state is represented by 2 bits:
 *  00 - Round in progress
 *  01 - Player 1 won round
 *  10 - Player 2 won round
 *  11 - Players 1 & 2 tied
 */
const ROUND_MASK = 1 << 1 || 1 << 4;
const STATE_MASK = USER_MASK | COMP_MASK | ROUND_MASK;

var rpsState = 0;

function nextRound(){
    rpsState = 0;
}

function processRound(userMove){
    //  Stop if game in-play
    if (rpsState & STATE_MASK) return;

    //  Apply user's move to state
    rpsState |= userMove;

    //  Generate computer's move
    let compMove = 1 << 1 | 1;
    const MOD_3_MASK = 1 << 3;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;  //  1
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;  //  11
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;  //  21
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;  //  31
    compMove <<= Math.round(Math.random()); compMove |= (compMove & MOD_3_MASK) >> 3; compMove &= ~MOD_3_MASK;
    //console.log(compMove << 2) & COMP_MASK;

    //  Apply computer's move to state
    rpsState |= (compMove << 2) & COMP_MASK;

    //  Generate new round status

    //  Apply round status to state
}

if ((!this.hasOwnProperty('Window') || !(this instanceof this.Window)) && typeof module === "object" && module !== null){
    module.exports = {
        getState: () => rpsState,
        reset: nextRound,
        move: processRound
    };
}
