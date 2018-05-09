
var Word = require("./word");
var letterBank = ["orange", "apple", "banana", "blue", "car", "book","reputation","nut","dress","vitamins"];
var inquirer = require("inquirer");
var guessWord = letterBank[Math.floor(Math.random()*10)];
var remainLetter = guessWord.length;
console.log(guessWord);
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
                 var word1 = new Word(guessWord);
                //  console.log(word1);
                //  console.log(word1.wordObj[i]);
                 word1.guessL(word1.wordObj[i],guessedLetter);
                 word1.wordString();
                 console.log(word1.rightLetter);
                 if (word1.rightLetter === true) {
                     remainLetter --;
                     
                 }
                 console.log(remainLetter);
            }
      });
    }
}

guess();