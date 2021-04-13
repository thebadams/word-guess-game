class Letter {
	constructor(letter) {
		if (!/[a-z1-9]/i.test(letter)) {
			this.visible = true;
		} else {
			this.visible = false;
		}
		this.char = letter;
	}
	toString() {
		if (this.visible === false) {
			return '_';
		} else {
            return this.char
        }
	}

	guess(guessChar) {
		if (this.char.match(guessChar)){
            this.visible = true;
			return true;
		} else {
			return false;
		}
	}

	getSolution() {
			return this.char;
		}
}

module.exports = Letter;
