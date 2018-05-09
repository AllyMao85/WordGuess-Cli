var wordFile = require("./letter.js");

var Word = function(guessWord) {
    this.guessWord = guessWord;
    this.wordObj = guessWord.split("");
    this.wordString = function() {
        for (var i=0; i<this.wordObj.length;i++) {
            console.log(i);
            Letter(wordObj[i]).checkLetter(wordObj[i])
            displayWord += displayWord.concat(Letter().underlyChar);

        }
    this.guessL = function(underlyChar,guessedLetter) {
        Letter(underlyChar).correctLetter(guessedLetter);
    }   
    }
};

var word1 = new Word("apple");
console.log(displayWord);
console.log(wordObj);

module.exports = Word;