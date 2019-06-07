// Primitive Types: string, numbers, boolean, null, undefined 
// Object: myObject --> Object.prototype --> null 
// Array: myArray --> Array.prototype --> Object.prototype --> null (this here is why arrays are technically objects) 
// Function: myFunc --> Function.prototype --> Object.prototype --> null (this here is why functions are technically objects) 
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber ==> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> myBoolean.prototype --> Object.prototype --> null 



const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('cat', 6)

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.remainingGuesses
console.log(game1.status) 


window.addEventListener('keypress', function(e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.getPuzzle()
    guessesEl.textContent = game1.remainingGuesses
    console.log(game1.status)
})