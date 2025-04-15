// Print function
function print(value) {
    console.log(value)
}

// Capitalize first letter function - extension of string functions
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase()
    + this.slice(1)
}


// AJAX - Asynchronous Javascript And XML
// Protocol for making async requests to a server over HTTP
// Misnomer now, because almost all modern APIs use JSON, not XML

// 1. Create a Promise
// 2. Within the promise, initiate AJAX request
// 3. If request succeeds, resolve the promise with the result
// 4. Otherwise, reject the promise with an error

// function getPokemonData(name) {
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
//         // This 'then' handles the promise returned by fetch()
//         .then(response => response.json())
// }

// async makes the function asynchronous
// JS will automatically wrap the return value of the function in a new promise
async function getPokemonData(name) {
    // await waits for the promise to resolve, then returns the resolved value
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await res.json()
    return data
}

// Get pokemon data when user clicks the button
// 1. Get the DOM node for the button
const btnGetPokemon = document.querySelector('#get-pokemon')
// 2. Attach a click event listener to the button
btnGetPokemon.addEventListener('click', async () => {
    const data = await getPokemonData('squirtle')
    // Update the text of pokemon-name with the name from the data
    // 1. Get the DOM node for pokemon-name
    const pokemonName = document.querySelector('#pokemon-name')
    // 2. Set innerText on pokemonName to data.name
    pokemonName.innerText = `Pokemon Name: ${data.name.capitalize()}`
})

print('Awaiting fetch...')