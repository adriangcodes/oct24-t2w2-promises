function print(value) {
    console.log(value)
}

// AJAX - Asynchronous Javascript And XML
// Protocol for making async requests to a server over HTTP
// Misnomer now, because almost all modern APIs use JSON, not XML

// 1. Create a Promise
// 2. Within the promise, initiate AJAX request
// 3. If request succeeds, resolve the promise with the result
// 4. Otherwise, reject the promise with an error

fetch('https://pokeapi.co/api/v2/pokemon/raichu')
    // This 'then' handles the promise returned by fetch()
    .then(response => response.json())
    // This 'then' handles the promise returned by text()
    .then(json => print(json))
    // .then(data => print(data))

print('Awaiting fetch...')