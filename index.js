
var wordFile = require("./word.js");
var letterBank = ["orange", "apple", "banana", "blue", "car", "book","reputation","nut","dress","vitamins"];

var guessWord = letterBank[Math.floor(Math.random()*10)];
var remainLetter = guessWord.length;

var guess = function () {
    
    if (remainLetter>0) {
      inquirer
          .prompt([
// Here we create a basic text prompt.
                 {
                   type: "input",
                   message: "Guess a letter!",
                   name: "guessLetter"
                  }
                 ])
          .then(function(Response) {
             var guessedLetter = Response.guessLetter;
             for (var i=0; i<guessWord.length;i++) {
                 Word(guessWord).guessL(word.wordObj[i],guessedLetter);
                 if (Letter.guessed = true) {
                     remainLetter --;
                 }
             }
      });
    }
}

guess();