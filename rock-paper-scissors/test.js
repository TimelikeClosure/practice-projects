"use strict";
const defineRPSMoves = require('./public/model');

const rpsMoves = ["rock", "paper", "scissors"];
const createRPSGame = defineRPSMoves(rpsMoves);

const rpsPlayers = ["computer", "human"];
const selectRPS = createRPSGame(...rpsPlayers);

const playerMoves = rpsMoves.map(($1, indexDiffMod, rpsMoves) => {
    return rpsMoves.map((p1Move, p1Index, rpsMoves) => {
        const p2Index = (p1Index - indexDiffMod + rpsMoves.length) % rpsMoves.length;
        const p2Move = rpsMoves[p2Index];
        return [[p1Move, p1Index], [p2Move, p1Index]];
    });
}).reduce((acc, current) => {
    return [...acc, ...current];
}, []);

console.log(JSON.stringify(playerMoves));
