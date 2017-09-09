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
 *  01 - Comp won round
 *  10 - User won round
 *  11 - User and Comp tied
 */
const ROUND_MASK = (1 << 1 | 1) << 4;
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

    //  Generate computer's move and round state
    const PROGRESS_MASK = 1 << 1 | 1;
    const RESET_MASK = 1 << 2;
    let compMove = ((userMove & 1) ^ (userMove >>> 1 & 1)) << 2 | userMove;
    let roundState = 1 << 1 | 1;
    let randomBit;

    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));

    //  Apply computer's move and round state to game state
    rpsState |= (compMove << 2) & COMP_MASK;
    rpsState |= (roundState << 4) & ROUND_MASK;
}

if ((!this.hasOwnProperty('Window') || !(this instanceof this.Window)) && typeof module === "object" && module !== null){
    module.exports = {
        getState: () => rpsState,
        reset: nextRound,
        move: processRound
    };
}
