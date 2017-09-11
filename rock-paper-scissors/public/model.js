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
    /**
     * Generate computer's move and round state randomly
     *  For random computer player move generation, there are three valid end-states: 01, 10, 11. Likewise, there are 
     *      three valid round end-states: 01, 10, 11. In base 10, these are the integers from 1 to 3. Using standard math
     *      operations, generating one of these would be as simple as:
     * 
     *      const compMove = Math.floor(Math.random() * 3 + 1);
     * 
     *  However, since only bitwise operations are allowed, neither multiplication nor addition can be used. In addition, 
     *      bitwise operations only operate on 32-bit integers. Math.random() generates a float in [0, 1) which, when a 
     *      bitwise operation is applied to it, always converts into a 0 first. Therefore, we must find some other way to 
     *      preserve some randomness while converting it to an integer. Fortunately, Math.round() will convert any float 
     *      within the [0, 0.5) range to 0 and the [0.5, 1) range to 1, so we utilize it with Math.random() to generate a 
     *      random bit. Since we need two bits, we could do this twice to get the valid end-states, re-trying when we 
     *      generate the invalid state 00:
     * 
     *      let compMove = 0;
     *      while (!compMove){
     *          let randomBit = Math.round(Math.random);
     *          compMove = randomBit << 1;
     *          randomBit = Math.round(Math.random);
     *          compMove |= randomBit;
     *      }
     * 
     *  Once again, we have used restricted operations: neither loops nor logical operators are allowed. We can, however, 
     *      generate as many random bits as we want, as long as we reduce the result somehow to the three outcomes above.
     *      An easiest way to do this would be to generate multiple random bits, count the number of 1's, then find 
     *      modulo 3 of the total. Since no math operations are allowed, including modulo, we are going to do this another
     *      way: using circular bit shifts. A standard repeated left bit shift results as follows:
     * 
     *          00001 ---> 00010 ---> 00100 ---> 01000 ---> 10000 ---> etc.
     * 
     *      A repeated circular left bit shift (mod 3) results as follows:
     * 
     *          00001 ---> 00010 ---> 00100 ---> 00001 ---> 00010 ---> etc.
     * 
     *      Since our expected output is one of (01, 10, 11), we can add on an extra bit and decide to only use the first 
     *          two bits after we're done shifting:
     * 
     *          001|01 ---> 000|11 ---> 001|10 ---> 001|01 ---> 000|11 ---> etc.
     * 
     *      Now comes the randomness. Suppose our starting state is 00abc. Each random step progresses as follows:
     * 
     *                                  00abc
     *                                    |
     *                        Math.round(Math.random())
     *                                    |
     *                    0 ------------------------------ 1
     *                    |                                |
     *          00a00 <-------> 000bc            00a00 <-------> 000bc
     *            |               |                |               |
     *          >>> 0            << 0            >>> 2            << 1
     *            |               |                |               |
     *            v               v                v               v
     *          00a00 --------- 000bc            0000a --------- 00bc0
     *                    |                                |
     *                    v                                v
     *                  00abc                            00bca
     * 
     *      After repeating this enough times, we end up with a fairly even distribution between 00101, 00011, and 00110.
     */

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
    randomBit = Math.round(Math.random());  //  5
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
    randomBit = Math.round(Math.random());  //  10
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
    randomBit = Math.round(Math.random());  //  15
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
    randomBit = Math.round(Math.random());  //  20
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
    randomBit = Math.round(Math.random());  //  25
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
    randomBit = Math.round(Math.random());  //  30
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));
    randomBit = Math.round(Math.random());
    compMove = ((compMove & PROGRESS_MASK) << randomBit) | ((compMove & RESET_MASK) >>> (randomBit << 1));
    roundState = ((roundState & PROGRESS_MASK) << randomBit) | ((roundState & RESET_MASK) >>> (randomBit << 1));

    //  Generate mask to only allow game state updates if game in progress
    const BIT_MASK = 1;
    let finishedMask = rpsState & STATE_MASK;
    finishedMask |= finishedMask >>> 3;
    finishedMask |= finishedMask >>> 1;
    finishedMask |= finishedMask >>> 1;
    finishedMask |= (finishedMask << 1) & STATE_MASK;
    finishedMask |= (finishedMask << 1) & STATE_MASK;
    finishedMask |= (finishedMask << 3) & STATE_MASK;
    const IN_PROGRESS_MASK = ~finishedMask & STATE_MASK;

    //  Apply user's move, computer's move, and round state to game state
    rpsState |= userMove & USER_MASK & IN_PROGRESS_MASK;
    rpsState |= (compMove << 2) & COMP_MASK & IN_PROGRESS_MASK;
    rpsState |= (roundState << 4) & ROUND_MASK & IN_PROGRESS_MASK;
}

/**
 * If the model is being tested though Node, export it as a module
 */
if ((!this.hasOwnProperty('Window') || !(this instanceof this.Window)) && typeof module === "object" && module !== null){
    module.exports = {
        getState: () => {
            return {
                user: rpsState & USER_MASK,
                comp: (rpsState & COMP_MASK) >>> 2,
                round: (rpsState & ROUND_MASK) >>> 4
            };
        },
        reset: nextRound,
        move: processRound
    };
}
