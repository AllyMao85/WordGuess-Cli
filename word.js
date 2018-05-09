var Letter = require("./letter");

var Word = function(guessWord) {
    this.guessWord = guessWord;
    this.wordObj = guessWord.split("");
    this.wordString = function() {
        var displayWord = "";
        for (var i=0; i<this.wordObj.length;i++) {
            //console.log("Current position is: "+i);
            //console.log("Current letter is: "+this.wordObj[i]);
            var newL = new Letter(this.wordObj[i]);
            newL.checkLetter(displayWord);
            //Letter(this.wordObj[i]).checkLetter(this.wordObj[i]);
            
            
            displayWord += displayWord.concat(newL.underlyChar);
            
        }
        console.log(displayWord);
    }
    this.rightLetter = false;
    this.guessL = function(underlyChar,guessedLetter) {
        var newLET = new Letter(underlyChar);
        newLET.correctLetter(guessedLetter);
        this.rightLetter = newLET.guessed;
        //newLET.correctLetter(guessedLetter);
        //console.log(Letter(underlyChar).guessed);
    }   
  
};

// var word1 = new Word("apple");
// word1.wordString();
// word1.guessL();
;//console.log(word1.wordObj);




module.exports = Word;