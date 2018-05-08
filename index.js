
var wordFile = require("./word.js");
var letterBank = ["orange", "apple", "banana", "blue", "car", "book","reputation","nut","dress","vitamins"];

var guessWord = letterBank[Math.floor(Math.random()*10)];
var remainLetter = guessWord.length;

var Guess = function() {
    Word(guessWord);
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
             Word().guessL(response.guessLetter);
      });
    }
}