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

    guessLetter(letter) {
        let guess = false;
        for (let letterObject of this.letters) {
            if (letter === letterObject.char) {
                guess = true;
                let index = this.letters.indexOf(letterObject);
                let lettersCopy = [...this.letters];
                let firstHalf = lettersCopy.slice(0, index); 
                let secondHalf = lettersCopy.slice(index+1, lettersCopy.length);
                this.letters = firstHalf.concat(secondHalf);
                letterObject.visible = true;
            }
        }
        return guess;
    }
    guessedCorrectly() {
        if (this.letters.length === 0) {
            return true;
        }
    return false;
    }
}

module.exports = Word;
