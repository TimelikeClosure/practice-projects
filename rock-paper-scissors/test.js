"use strict";
const rps = require('./public/model');

console.log("\n===INITIAL STATE TEST===");

let currentState = rps.getState();
console.log("user's move: ", currentState.user);
console.log("comp's move: ", currentState.comp);
console.log("round state: ", currentState.round);
let testPass = (
    currentState.user === 0 
    && currentState.comp === 0 
    && currentState.round === expectedRoundState(currentState.user, currentState.comp)
);

console.log(`===TEST ${testPass ? "PASSED" : "FAILED"}===`);

console.log("\n===PLAYERS MOVE TEST===");

rps.move(3);
currentState = rps.getState();
console.log("user's move: ", currentState.user);
console.log("comp's move: ", currentState.comp);
console.log("round state: ", currentState.round);
testPass = (
    currentState.user === 3 
    && [1, 2, 3].indexOf(currentState.comp) !== -1 
    && currentState.round === expectedRoundState(currentState.user, currentState.comp)
);

console.log(`===TEST ${testPass ? "PASSED" : "FAILED"}===`);

console.log("\n===2ND MOVE WITHOUT RESET TEST===");

let previousState = currentState;
rps.move(1);
currentState = rps.getState();
console.log("user's move: ", currentState.user);
console.log("comp's move: ", currentState.comp);
console.log("round state: ", currentState.round);
testPass = (
    currentState.user === previousState.user
    && currentState.comp === previousState.comp
    && currentState.round === previousState.round
);

console.log(`===TEST ${testPass ? "PASSED" : "FAILED"}===`);

console.log("\n===ROUND RESET TEST===");

rps.reset();
currentState = rps.getState();
console.log("user's move: ", currentState.user);
console.log("comp's move: ", currentState.comp);
console.log("round state: ", currentState.round);
testPass = (
    currentState.user === 0 
    && currentState.comp === 0 
    && currentState.round === expectedRoundState(currentState.user, currentState.comp)
);

console.log(`===TEST ${testPass ? "PASSED" : "FAILED"}===`);

console.log("\n===COMP PLAYER EVENLY DISTRIBUTED MOVES TEST===");
const iterations = 100000;
console.log("Number of iterations per user move: " + iterations);
const counts = {
    '1': {'1': 0, '2': 0, '3': 0},
    '2': {'1': 0, '2': 0, '3': 0},
    '3': {'1': 0, '2': 0, '3': 0},
    'total': {'1': 0, '2': 0, '3': 0}
};
for (let userMove = 1; userMove <= 3; userMove++){
    for (let i = 0; i < iterations; i++){
        rps.reset();
        rps.move(userMove);
        currentState = rps.getState();
        counts[userMove][currentState.comp]++;
        counts["total"][currentState.comp]++;
    }
}
let expectedRange = getExpectedRange(iterations);
testPass = true;
for (let userMove = 1; userMove <= 3; userMove++){
    console.log(`  For user move ${userMove} :\n    comp move distribution : ${JSON.stringify(counts[userMove])}\n    expected range : ${JSON.stringify(expectedRange)}`);
    for (let compMove = 1; compMove <= 3; compMove++){
        const moveComboCount = counts[userMove][compMove];
        testPass = testPass && moveComboCount >= expectedRange[0] && moveComboCount <= expectedRange[1];
    }
}
expectedRange = getExpectedRange(3 * iterations);
console.log(`  For all user moves :\n    comp move distribution : ${JSON.stringify(counts["total"])}\n    expected range : ${JSON.stringify(expectedRange)}`);
for (let compMove = 1; compMove <= 3; compMove++){
    const moveComboCount = counts["total"][compMove];
    testPass = testPass && moveComboCount >= expectedRange[0] && moveComboCount <= expectedRange[1];
}
console.log(`===TEST ${testPass ? "PASSED" : "FAILED"}===`);

function expectedRoundState(userMove, compMove){
    const roundStateMap = [
        [0, false, false, false],
        [false, 3, 1, 2],
        [false, 2, 3, 1],
        [false, 1, 2, 3]
    ];
    if (!roundStateMap.hasOwnProperty(userMove) || !roundStateMap[userMove].hasOwnProperty(compMove)){
        return false;
    }
    return roundStateMap[userMove][compMove];
}

function getExpectedRange(iterations){
    const errorMargin = 3 * Math.sqrt(iterations);
    return [Math.ceil(iterations / 3 - errorMargin), Math.floor(iterations / 3 + errorMargin)];
}
