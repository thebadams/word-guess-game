const Letter = require("./Letter");
class Word {
    constructor(string){
        this.string = string
        this.letters = [];

        let charArray = string.split('');
        for(let char of charArray){
            let letterObject = new Letter(char);
            this.letters.push(letterObject);
        }
    }

    toString(){
       return this.letters.join(" ")
    }

    getSolution(){
        return this.letters.map((letter)=> letter.getSolution())
    }

    guessLetter(guessChar) {
        let correctGuess = false;
        this.letters.forEach((letter)=>{
            if (letter.guess(guessChar)) {
                correctGuess = true;
            }
        })
        return correctGuess;
    }

    guessedCorrectly() {
       return this.letters.every((letter)=>letter.visible);
    }
}

module.exports = Word;
