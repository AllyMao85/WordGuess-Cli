var inquirer = require("inquirer");
var guessWord = "hero";
var displayWord = "h__o";
var wordObj = displayWord.split("");


var Letter = function (underlyChar) {
  this.underlyChar = underlyChar;
  this.guessed = false;
  this.checkLetter = function (underlyChar) {
// Create a "Prompt" with a series of questions.
             console.log(underlyChar);
             var i = displayWord.indexOf(this.underlyChar);
             console.log(i);
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
             if (i>0) {
                 this.underlyChar = displayWord.substring(i,i+1);
                console.log(this.underlyChar);
              }  else {
                this.underlyChar = "_";
              }
         
       }
  this.correctLetter = function(character) {
         console.log(character);
         if (underlyChar === character) {
          this.guessed = true;
          console.log("CORRECT!!!");
         } else {
          console.log("INCORRECT!!!");
         }
      
    }
    console.log(this.underlyChar);
    console.log(this.guessed);
};

var newL = new Letter("o");

newL.checkLetter();
newL.correctLetter("i");
console.log("testfile");
//rightword[i]=comGuessLower.substring(i,i+1);
module.exports = Letter;