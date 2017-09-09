"use strict";
const rps = require('./public/model');

const USER_MASK = 1 << 1 | 1 << 1 | 1;
const COMP_MASK = USER_MASK << 2;
const ROUND_MASK = COMP_MASK << 2;

console.log("\n===ROUND START TEST===");

console.log("user's state: ", rps.getState() & USER_MASK);
console.log("comp's state: ", (rps.getState() & COMP_MASK) >>> 2);
console.log("round state: ", (rps.getState() & ROUND_MASK) >>> 4);

rps.move(3);

console.log("\n===ROUND FINISH TEST===");

console.log("user's state: ", rps.getState() & USER_MASK);
console.log("comp's state: ", (rps.getState() & COMP_MASK) >>> 2);
console.log("round state: ", (rps.getState() & ROUND_MASK) >>> 4);

rps.reset();

console.log("\n===ROUND RESET TEST===");

console.log("user's state: ", rps.getState() & USER_MASK);
console.log("comp's state: ", (rps.getState() & COMP_MASK) >>> 2);
console.log("round state: ", (rps.getState() & ROUND_MASK) >>> 4);

console.log("\n===COMP PLAYER RANDOM MOVE DISTRIBUTION TEST===");
const counts = {};
for (let i = 0, value; i < 10000; i++){
    rps.move(3);
    value = (rps.getState() & COMP_MASK) >>> 2;
    counts[value] = counts.hasOwnProperty(value) ? (counts[value] + 1) : 1;
    rps.reset();
}

console.log(counts);
