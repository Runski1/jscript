'use strict';
const searchQuery = document.querySelector('#query');
const button = document.querySelector('input[type="submit"]');
const targetElement = document.querySelector('#results');
let showData

button.addEventListener('click', async function (event) {
    event.preventDefault();
    const query = searchQuery.value;
    showData = await searchFunction(query);
    targetElement.innerHTML = '';
    generateArticles(showData)

})

async function searchFunction(string) {
    console.log('Searching begins');
    let jsonData;
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${string}`);
        jsonData = await response.json();
        console.log('JSON loaded')
        return jsonData;
    } catch (error) { // This is like Except in python, executed when try fails
        console.log(error.message); // NEED to try this out with expected 404
        return null;
    } finally {  // finally is executed regardless of what happens with try
        console.log('searching done');
    }
}

function generateArticles(data) {
    for (let tvShow of data) {
        const article = document.createElement('article');
        const header = document.createElement('h2');
        const link = document.createElement('a');
        const image = document.createElement('img');
        const summary = document.createElement('div');
        header.textContent = tvShow.show.name;
        article.appendChild(header);
        image.src = tvShow.show.image?.medium;
        image.alt = tvShow.show.name;
        article.appendChild(image);
        link.href = tvShow.show.url;
        link.textContent = tvShow.show.url;
        link.target = "_blank"
        article.appendChild(link);
        summary.innerHTML = tvShow.show.summary; // damn <p>tags</p>
        article.appendChild(summary);
        targetElement.appendChild(article);
    }
    
}
