// Primitive Types: string, numbers, boolean, null, undefined 
// Object: myObject --> Object.prototype --> null 
// Array: myArray --> Array.prototype --> Object.prototype --> null (this here is why arrays are technically objects) 
// Function: myFunc --> Function.prototype --> Object.prototype --> null (this here is why functions are technically objects) 
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber ==> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> myBoolean.prototype --> Object.prototype --> null 

const puzzleEl = document.getElementById('puzzle')
const guessesEl = document.getElementById('guesses')

const game1 = new Hangman('cat', 5)


window.addEventListener('keypress', function(e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    console.log(game1.remainingGuesses)
    console.log(game1.getPuzzle())
    console.log(game1.status)
})