class Letter {
    constructor(letter){
        const regEx = /\W|\D/
        if(letter.match(regEx)){
            this.visible = true
        }else{
            this.visible = false
        }
        this.char = letter
   
         
    }
  toString(){
    const regEx = /[a-z]|[A-Z]/
    if(this.char.match(regEx)){
        return "_"
    }

    }

    guess(guessChar){
        if(guessChar.match(this.char)){
            return true
        } else{
            return false
        }
    }

    getSolution(){
         if(this.char.match(this.char)){
             return this.char
         }

  }
}

module.exports = Letter;
