'use strict';
const searchQuery = document.querySelector('#query');
const button = document.querySelector('input[type="submit"]');

button.addEventListener('click', (event) => {
    event.preventDefault();
    const query = searchQuery.value;
    searchFunction(query);
})

async function searchFunction(string) {
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${string}`);
        console.log(response)
    } catch (error) { // This is like Except in python, executed when try fails
        console.log(error.message); // NEED to try this out with expected 404
     } /*finally {  // finally is executed regardless of what happens with try
        console.log('searching done');
        console.log(jsonData);
    }*/
} 