const Hangman = function(word, remainingGuesses) {
    this.word = word.toLowerCase().split('') 
    this.remainingGuesses = remainingGuesses
    this.lettersGuessed = []
    this.status = 'playing'
}

Hangman.prototype.getStatus = function() {

    const finished = this.word.every((letter) => this.lettersGuessed.includes(letter)) 

    if(this.remainingGuesses === 0) {
        this.status = 'failed'
    } else if(finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
}

Hangman.prototype.getPuzzle = function() {
    let puzzle = ''

    this.word.forEach((letter) => {
        if(this.lettersGuessed.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })
    return puzzle
}  

Hangman.prototype.makeGuess = function(guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.lettersGuessed.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if(isUnique) {
        this.lettersGuessed.push(guess)
    }

    if(isUnique && isBadGuess) {
        this.remainingGuesses--
    }
}
