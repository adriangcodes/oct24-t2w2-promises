function print(value) {
    console.log(value)
}

print('Async JS')

// resolve and reject are callback functions
// Passed in by the Promise constructor
const firstPromise = new Promise((resolve, reject) => {
    // Call resolve() anywhere to resolve the promise
    // Or, call reject() anywhere to reject the promise
    // Either one acts like a return - it will exit the function immediately
    // resolve('Hello')
    reject('Did not work!')
})

print('Promise initiated')

// Main
// The 'then' callback happens if the promise resolves
firstPromise.then(result => {
    print(`Promise result: ${result}`)
// The 'catch' callback happens if the promise rejects
}).catch(err =>{
    console.error(err)
})

print('End of Line')