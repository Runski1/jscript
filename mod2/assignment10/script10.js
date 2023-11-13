'use strict';
const numOfCandidates = Number(prompt("How many candidates?"));
const candidates = [];
for (let i = 1; i <=  numOfCandidates; i++) {
    candidates.push({'name': prompt("Name for candidate " + i), 'votes': 0});
}
console.log(candidates);
const numOfVoters = Number(prompt("How many voters?"));
let votedCandidate = "";
let promptString = "";
for (let i = 1; i <= numOfVoters; i++) {
    promptString = `Voter ${i}, who do you vote?` // annoying little ticks needed
    votedCandidate = prompt(promptString)

}