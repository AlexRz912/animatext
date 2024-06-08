import Text from "../models/text_model.js"
import CharController from "./char_controller.js";

class TextController {
  constructor(text, domElem) {

    this.domElement = domElem
    this.charController = null
    this.charCount = 0
    this.text = new Text(text);  //Créer une fonction dans textModel qui calcule le texte déjà rendu et l'envoie à this.renderedText
    // this.text = text
    // this.#createTextObjects()
  }

  textLoop = async () => {
    while (this.charCount < this.text.initialText.length) {
      this.text.setRenderedTextAndNextLetter({ counter: this.charCount });

      this.charController = new CharController(this.domElement);
      
      await this.charController.randomLetterLoop({
        renderedText: this.text.renderedText,
        nextLetter:   this.text.nextLetter
      });

      this.charCount++;
    }
  }
}

export default TextController
