'use strict';
const numOfCandidates = Number(prompt("How many candidates?"));
const candidates = [];
for (let i = 1; i <=  numOfCandidates; i++) {
    candidates.push({'name': prompt("Name for candidate " + i), 'votes': 0});
}

const numOfVoters = Number(prompt("How many voters?"));
let votedCandidate = "";
let promptString = "";

for (let i = 1; i <= numOfVoters; i++) {
    promptString = `Voter ${i}, who do you vote?` // annoying little ticks needed
    votedCandidate = prompt(promptString);

    for (let candidate of candidates) {
        if (candidate.name == votedCandidate) {
            candidate.votes += 1;
        }
    }
}
function sortByVotes(a, b) {
    return b.votes - a.votes;
}
candidates.sort(sortByVotes)
console.log(candidates)