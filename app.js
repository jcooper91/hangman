// Primitive Types: string, numbers, boolean, null, undefined 
// Object: myObject --> Object.prototype --> null 
// Array: myArray --> Array.prototype --> Object.prototype --> null (this here is why arrays are technically objects) 
// Function: myFunc --> Function.prototype --> Object.prototype --> null (this here is why functions are technically objects) 
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber ==> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> myBoolean.prototype --> Object.prototype --> null 



// HTTP - Hypertext Transfer Protocol
// Request - what we want to do
// Response - what was actually done

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('car parts', 6)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})

getCountry("GB", (error, country) => {
    if(error) {
        console.log('This is an error')
    } else {
        console.log(country.name)
    }
}) 


// 1. Create a new function for getting country details
// 2. Call it with two arguments: country code, the callback function
// 3. Make the HTTP request and call the callback with country information
// 4. Use the callback to print country name


// IMPORTANT 
// Below is asyncronous code
// the console log will run even before the below puzzle is finished returning something
// this is good, because it means the browser can load other code (in this case console.log) without having to wait for the getPuzzle function finish
// this means that the user will get a better experience

getPuzzle("3", (error, puzzle) => {
    if(error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle) 
    }
})
console.log('Do something else')

// IMPORTANT
// Syncronous code
// getpuzzle wlll return something, however the rest of the code (in this case the last console.log) won't print
// this is due to the way we have set up the function getPuzzleSync
// this bad cause it means the user won't be able to interact with the rest of the page until this function is complete
// in our example we put a checkbox in the HTML, user won't be able to click until this function has stopped running 
// const puzzle = getPuzzleSync()
// console.log(puzzle)
// console.log('Do something else')


// COUNTRY CHALLENGE

// const countryRequest = new XMLHttpRequest()
// const countryCode = "GB"

// countryRequest.open('GET', 'http://restcountries.eu/rest/v2/')
// countryRequest.send()

// // his solution
// countryRequest.addEventListener('readystatechange', (e) => {
//     if(countryRequest.readyState === 4 && countryRequest.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         const country = data.find((country) => country.alpha2Code === countryCode)
//         console.log(country.name)
//     } else if (e.target.readyState === 4) {
//         console.log("Unable to fetch data")
//     }
// })

// my way
// countryRequest.addEventListener('readystatechange', (e) => {
//     if(countryRequest.readyState === 4 && countryRequest.status === 200) {
//         const countries = JSON.parse(countryRequest.responseText)
//         countries.forEach((country) => {
//             if(country.alpha2Code === countryCode) {
//                 console.log(country.name)
//             }
//         })   
//     }
// })






