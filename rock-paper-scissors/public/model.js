/**
 * Goal - Write Rock-Paper-Scissors game model using bit logic
 *   - Memory - as compact as possible 
 *      - every bit means something
 *      - keep the call stack as short as possible
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

/**
 * Overall game state is represented by 6 bits:
 *  |00|00|00| --> |00 - round state|00 - comp hand|00 - user hand|
 */
const STATE_MASK = USER_MASK | COMP_MASK | ROUND_MASK;

/**
 * For initial game state and after reset, all bits are set to 0
 */
let rpsState = 0;
function nextRound(){
    rpsState = 0;
}

/**
 * The round is completed once the user's hand is supplied. Will not affect rounds already completed.
 * @param {int} userMove - the 2-bit respresentation of the user's hand
 */
function processRound(userMove){
    //  Stop if game in-play (Note: currently the only used conditiional)
    if (rpsState & STATE_MASK) return;

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

    //  Apply user's move, computer's move, and round state to game state
    rpsState |= userMove;
    rpsState |= (compMove << 2) & COMP_MASK;
    rpsState |= (roundState << 4) & ROUND_MASK;
}

/**
 * If the model is being tested though Node, export it as a module
 */
if ((!this.hasOwnProperty('Window') || !(this instanceof this.Window)) && typeof module === "object" && module !== null){
    module.exports = {
        getState: () => rpsState,
        reset: nextRound,
        move: processRound
    };
}
