import Text from "../models/text_model.js"
import CharController from "./char_controller.js";

class TextController {
    constructor(text, domElem) {

        this.domElement = domElem
        this.text = new Text(text);
        // this.text = text
        // this.#createTextObjects()
        this.#initTextController();
    }

    #initTextController() {
        this.charController = null
        this.charCount = 0 //Créer une fonction dans textModel qui calcule le texte déjà rendu et l'envoie à this.renderedText
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
