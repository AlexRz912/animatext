import RandomChar from "../models/random_char_model.js"


class CharController {
  constructor(domElem) {

    this.domElem = domElem;
    this.randomChar = null;
    this.charCount = 0;
    this.animationEnd = false;
  }

  randomLetterLoop = ({renderedText, nextLetter}) => { // recursion
    return new Promise((resolve) => {

      if (this.animationEnd) return resolve(true);

        this.randomChar = new RandomChar();
        this.animationEnd = this.#intervalForRandomChar({renderedText: renderedText, nextLetter: nextLetter}).then();

        return resolve(this.randomLetterLoop({renderedText: renderedText, nextLetter: nextLetter}));
    })
  }

  #intervalForRandomChar = ({renderedText, nextLetter}) => {
    return new Promise((resolve) => {
      setTimeout(() => {

        if (this.charCount === 3) {

          this.domElem.insertCharToParagraph({renderedText: renderedText, char: nextLetter})
          this.charCount = 0;
          resolve(true)

        } else {

          this.domElem.insertCharToParagraph({renderedText: renderedText, char: this.randomChar.char})
          this.charCount++
          resolve(false);

        }

      }, 20)
    })
  }
}

export default CharController
