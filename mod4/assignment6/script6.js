'use strict';
async function getJoke(query) {
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
    const jokeData = await response.json();
    return jokeData;
}
function jokePrinter(data) {
    const targetElement = document.querySelector('#target');
    for (let joke of data['result']) {
        const myParagraph = document.createElement('p');
        myParagraph.textContent = joke.value;
        targetElement.appendChild(myParagraph);
    }
}

const button = document.querySelector('input[type="submit"]');
button.addEventListener('click', async (event) => {
    event.preventDefault();
    document.querySelector('#target').innerHTML = "";
    const query = document.querySelector('#query').value;
    const jokeData = await getJoke(query);
    jokePrinter(jokeData);
})
