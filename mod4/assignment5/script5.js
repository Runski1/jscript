'use strict';
async function getJoke() {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const jokeData = await response.json();
    console.log(jokeData.value)
}
getJoke();