var wordFile = require("./letter.js");





var Word = function(guessWord) {
    this.guessWord = guessWord;
    this.wordObj = guessWord.split("");
    this.wordString = function() {
        for (var i=0; i<wordObj.length;i++) {
            Letter(wordObj[i]).checkLetter(wordObj[i])
            displayWord = displayWord.concat(Letter().underlyChar);

        }
    this.guessL = function(guessedLetter) {
        Letter().correctLetter(guessedLetter);
    }   
    }
};

module.exports = Word;